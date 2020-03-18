<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        style="margin-top: 70px"
    >
        <v-text-field
            v-model="title"
            counter="50"
            :rules="titleRules"
            label="Title"
            required
        ></v-text-field>
        <v-text-field
            v-model="description"
            :rules="descriptionRules"
            label="Description"
            required
        ></v-text-field>
        <v-text-field
            v-model="cost"
            :rules="costRules"
            label="Cost"
            required
        ></v-text-field>
        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
        ></v-checkbox>
        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit"
        >
            Submit
        </v-btn>
        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
            Reset Form
        </v-btn>
        <v-btn
            color="warning"
            @click="resetValidation"
        >
            Reset Validation
        </v-btn>
    </v-form>
</template>

<script>
  export default {
    props: ['schoolABI', 'courseABI', 'schoolAddress'],
    data() {
        return {
            valid: true,
            title: '',
            titleRules: [
                v => !!v || 'Title is required',
                v => (v && v.length <= 50) || 'Title must be less than 50 characters',
            ],
            description: '',
            descriptionRules: [
                v => !!v || 'Description is required',
            ],
            cost: '',
            costRules: [
                v => !!v || 'Cost is required',
                v => !isNaN(v) || 'Cost must be a number!',
            ],
            checkbox: false,
        }
    },
    methods: {
        submit () {
            if (this.$refs.form.validate()){
                this.snackbar = true

                let Web3 = require('web3')
                let web3 = new Web3('https://ropsten.infura.io/v3/b8e2316595f84814a33ad2c71d1def49')               
                let Tx = require('ethereumjs-tx').Transaction

                const account = '0xe61a3bf92041491e61FbbF191e297E96B3fAf7cB'
                const privateKey = Buffer.from('a6fa95a39d7581178095a6d2befb68cc9e22c7ecc4f4848e9791a9f0dac6a231', 'hex')

                let contractSchool = new web3.eth.Contract(this.schoolABI, this.schoolAddress)

                web3.eth.getTransactionCount(account, (err, txCount) => {
                    let data = contractSchool.methods.addCourse(parseInt(this.cost), this.title, this.description).encodeABI()
                    let txObject = {
                        chainId: 3,
                        nonce: web3.utils.toHex(txCount),
                        gasLimit: web3.utils.toHex(300000),
                        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
                        to: this.schoolAddress,
                        data: data
                    }

                    let tx = new Tx(txObject, {chain: 'ropsten'})
                    tx.sign(privateKey)

                    let serializedTx = tx.serialize()
                    let raw = '0x' + serializedTx.toString('hex')

                    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
                        // eslint-disable-next-line no-console
                        console.log(err, txHash)
                    })      
                })      
            }
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
  }
</script>