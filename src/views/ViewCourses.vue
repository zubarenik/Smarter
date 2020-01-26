<template>
    <div>
        <v-row style="margin-top: 50px">
            <v-col v-for="item in items" :key="item.title" cols="12">
                <v-card style="margin-bottom: 20px">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline" v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        
                    </v-card-actions>
                </v-card>
            </v-col>    
        </v-row>
    </div>
</template>

<script>
export default {
    props: ['schoolABI', 'courseABI', 'schoolAddress', 'user'],
    data() {
        return {
            items: [],
        }
    },
    methods: {
        getItems() {
            let Web3 = require('web3')
            let web3 = new Web3('https://ropsten.infura.io/v3/b8e2316595f84814a33ad2c71d1def49')               
            web3.eth.account = this.user
            let contractSchool = new web3.eth.Contract(this.schoolABI, this.schoolAddress)
            
            contractSchool.methods.getCourses().call()
            .then(courses => {
                for (let course of courses){
                    contractSchool.methods.getCourseInfo(course).call()
                    .then(response => {
                        let contractCourse = new web3.eth.Contract(this.courseABI, course)
                        let lessons = []
                        for (let lesson of response[2]){
                            contractCourse.methods.getLessonInfo(lesson).call()
                            .then(currentLesson => {
                                lessons.push(currentLesson)
                            })
                        }
                        let newItem = {
                            title: response[0],
                            cost: response[1],
                            lessons: lessons
                        }
                        this.items.push(newItem)
                    })
                }
            })
        }
    },
    mounted(){
        this.getItems()
    }
}
</script>