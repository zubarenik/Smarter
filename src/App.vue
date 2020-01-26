<template>
  <v-app>
     <v-app-bar
      :collapse-on-scroll="false"
      absolute
      color="#192965"
      dark
      scroll-target="#scrolling-techniques-6"
    >
      <v-list-item-avatar size="50" color="#f0efef">
        <v-img src="/icon.png"></v-img>
      </v-list-item-avatar>
      <v-toolbar-title><router-link to="/" id="title">Smarter</router-link></v-toolbar-title>
      <div id="nav">
        <router-link to="/courses">Explore</router-link> |
        <router-link to="/new">Create</router-link> courses
      </div>
    </v-app-bar>

    <v-content class="px-12 py-3">
      <v-container>
        <router-view 
          :schoolABI="schoolABI" 
          :courseABI="courseABI" 
          :schoolAddress="schoolAddress"
          :user="user"
        />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      user: '0xe61a3bf92041491e61FbbF191e297E96B3fAf7cB',
      schoolABI: [
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "uint24",
              "name": "en_cost",
              "type": "uint24"
            },
            {
              "internalType": "string",
              "name": "en_name",
              "type": "string"
            }
          ],
          "name": "addCourse",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_course",
              "type": "address"
            }
          ],
          "name": "getCourseInfo",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint24",
              "name": "",
              "type": "uint24"
            },
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getCourses",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ],
      schoolAddress: '0x7e20c6aEfFa37139daf03CdE003f94d7b8C57A9c',
      courseABI: [
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "string",
              "name": "en_title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "en_data",
              "type": "string"
            }
          ],
          "name": "addLesson",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint24",
              "name": "en_cost",
              "type": "uint24"
            },
            {
              "internalType": "string",
              "name": "en_title",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getCost",
          "outputs": [
            {
              "internalType": "uint24",
              "name": "",
              "type": "uint24"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "_lesson",
              "type": "address"
            }
          ],
          "name": "getLessonInfo",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getLessons",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getTitle",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ],
    }
  }
}
</script>

<style>
  #app{
    background: #E5E9FF;
  }
  #nav {
    padding: 30px;
  }
  #nav a, #title{
    font-weight: bold;
    color: #bbcfff;
    text-decoration: none;
  }
  #nav a.router-link-exact-active {
    color: #faafff;
  }
</style>