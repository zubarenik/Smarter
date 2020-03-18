<template>
    <div>
        <v-row style="margin-top: 50px">
            <v-col v-for="item in items" :key="item.title" cols="12">
                <v-card 
                    style="margin-bottom: 20px"
                    max-width="70%"
                    class="mx-auto"
                    color="#dab8f3"
                >
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline" v-text="item.title"></v-list-item-title>
                            <v-list-item-title v-text="item.description"></v-list-item-title>
                            <v-list-item-icon>
                            </v-list-item-icon>
                        </v-list-item-content>
                    </v-list-item>
                    <div class="text-center">              
                        <v-btn 
                            color="#bbcfff" 
                            width="90%" 
                            @click="item.check = !item.check"
                        >
                            View lessons
                        </v-btn>
                    </div>
                    <div v-if="item.check">
                        <v-list-item-group color="#192965">
                            <v-list-item v-for="lesson in item.lessons" :key="lesson[0]">
                                <v-list-item-icon>
                                    <v-icon>mdi-buffer</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="lesson[0]"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </div>
                    <v-card-actions>
                        <v-row
                            align="center"
                            justify="end"
                        >
                            <span class="subheading mr-2">{{ item.cost }}</span>
                            <v-icon class="mr-4">mdi-cash-usd</v-icon>
                            <v-btn icon class="mr-4">
                                <v-icon>mdi-arrow-down-bold-circle</v-icon>
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>    
        </v-row>
    </div>
</template>

<script>
export default {
    props: ['schoolABI', 'courseABI', 'schoolAddress'],
    data() {
        return {
            items: [],
        }
    },
    methods: {
        getItems() {
            let Web3 = require('web3')
            let web3 = new Web3('https://ropsten.infura.io/v3/b8e2316595f84814a33ad2c71d1def49')               
            let contractSchool = new web3.eth.Contract(this.schoolABI, this.schoolAddress)
            
            contractSchool.methods.getCourses().call()
            .then(courses => {
                for (let course of courses){
                    contractSchool.methods.getCourseInfo(course).call()
                    .then(response => {
                        let contractCourse = new web3.eth.Contract(this.courseABI, course)
                        let lessons = []
                        for (let lesson of response[3]){
                            contractCourse.methods.getLessonInfo(lesson).call()
                            .then(currentLesson => {
                                lessons.push(currentLesson)
                            })
                        }
                        let newItem = {
                            title: response[0],
                            description: response[1],
                            cost: response[2],
                            lessons: lessons,
                            check: false,
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