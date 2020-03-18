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
        />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
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
            },
            {
              "internalType": "string",
              "name": "en_description",
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
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "listOfCourses",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ],
      schoolAddress: '0x3DF4497C2bB63F135c18745854a9d07B67491947',
      courseABI: [
        {
          "constant": true,
          "inputs": [],
          "name": "getDescription",
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
        },
        {
          "constant": false,
          "inputs": [],
          "name": "buyCourse",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
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
            },
            {
              "internalType": "string",
              "name": "en_description",
              "type": "string"
            },
            {
              "internalType": "address payable",
              "name": "en_owner",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
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