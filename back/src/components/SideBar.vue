<template>
  <div class="col-12 col-md-3 col-xl-2 b-sidebar d-none d-lg-block  ">
  <SideBarContent />
  </div>


   
     
</template>

<script>
import SideBarContent from './SideBarContent.vue'


export default {
  props: ['testProp'],
  components:{
    SideBarContent
  },
  template:`

  
  `,
  name: 'SideBar',
  data (){
      return {
          sidebarButton : true,
          isVisible: false,
          classObject:{
            display:"block"
          },
          b_sider_star: ``,
          b_sider_end: ``,
          sider_toggle:``,
          windows_size_ctl: `d-none d-lg-block`
       
      }
 }
,watch: {
    testProp() {
      this.sayHello();
    }
  }
 ,methods:{
    //   visibleHandler(isVisible){
    //       this.isVisible = isVisible;
    //       if(isVisible){
    //           alert("Now > 350")
    //       }else{
    //           alert("Now < 350")

    //       }
    //   }
    visibleHandler(isVisible){
        alert(isVisible)
        this.isVisible = isVisible
        if (!isVisible){
           alert("b-sider")
           this.b_sider_star = `<b-sidebar id="my-sidebar"   title="Sidebar" shadow> `;
           this.b_sider_end = `</b-sideba> `;
           this.sider_toggle = `my-sidebar`
          //this.classObject.display = "block"
        }else{
          //this.classObject.display = "none"
        }
       
      
      },
      sayHello() {
        alert('hello');
      }
    
  }
  
  
  
}
</script>