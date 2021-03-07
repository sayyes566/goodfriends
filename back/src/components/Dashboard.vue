<template>
  <div class="hello">
    <Header />
    <div class="container-fluid">
      <div class="row flex-xl-nowrap">
        
         <SideBar ref="visibleHandler"/>

         <main class="col-md-9 col-xl-9 py-md-3 pl-md-5 bd-content" role="main">
          <!-- <h1 class="bd-title" id="content">您好！您不孤單</h1> -->
          <h1 class="bd-title" id="content"  >您好！</h1>
      
         
          <p :class="[isVisible ? 'bg-info' : 'bg-light', 'border', 'p-2', 'text-center']"
      style="height: 85px; overflow-y: scroll;">ffzzfff</p>
      <div>
    
    <p class="mt-2">
      Visible: {{ isVisible }}
    </p>
  </div>
  <p>{{text}}</p>
   <p>{{text}}</p>
    <p>{{text}}</p>
          <!-- <p class="bd-lead">在此您可以抒發您的
            情
            緒
            ，
            分享您的身體狀況
            ，與大家交流各式各樣的疾病問題，歡迎病人的家屬和專業的醫師一起幫助病友，讓病友能早日康復，過幸福的人生！</p> -->
               <div class="row">
                   <div class="container">
                       <div class="row">
                     <div class="col-md-7 ">
                       <!-- <Users v-if="login.check = true" :login="sayhi and write" /> -->
                        <CreateUser @createUser="userCreate($event)" />
                     </div>
                  
                   <div class="col-md-4">
                       <DisplayBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()" />
                  </div>
                  </div>
                </div>
            </div>
             <div class="row ">
                <Users v-if="users.length > 0" :users="users" />
            </div>
         </main>
    </div>
    
  </div>

  

  </div>
    <!-- <Header />
    <SideBar />
        <div id="page-content-wrapper">
            <div class="col-md-6">
                <CreateUser @createUser="userCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()" />
            </div>
       
        </div>
      </div>
    <div class="row mrgnbtm">
        <Users v-if="users.length > 0" :users="users" />
    </div> -->

</template>





                
   
    
  
     



<script>
import Header from './Header.vue'
import CreateUser from './CreateUser.vue'
import DisplayBoard from './DisplayBoard.vue'
import Users from './Users.vue'
import { getAllUsers, createUser } from '../services/UserService'
import SideBar from './SideBar.vue'


export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateUser,
    DisplayBoard,
    SideBar,
    Users
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0,
          isVisible : false,
           text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur commodo
          non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum
          commodo tempor sunt in proident. Non elixir food exorcism nacho tequila tasty.
        `,
         trigger: 0
      }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
      
    },
    userCreate(data) {
      console.log('data:::', data)
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  },
  mounted () {
    this.getAllUsers();
  }
}
</script>