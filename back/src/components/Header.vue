<template>

    
<div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <!-- custom toggle icon -->
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
       <!-- <b-button v-b-toggle:my-sidebar>   Mys Collapse</b-button> -->
    </b-navbar-toggle>
     

    <b-navbar-brand>BootstrapVue</b-navbar-brand>
     <b-navbar-toggle target="my-sidebar">
        <b-navbar-nav>
        <b-icon    icon="three-dots-vertical" animation="cylon" font-scale="2" title="option"></b-icon>
      </b-navbar-nav>
    </b-navbar-toggle>
   

    <b-collapse id="navbar-toggle-collapse" is-nav>
       <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
    </b-navbar-nav >
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>

      <!----- side contnet -->
       <b-sidebar id="my-sidebar"  title="Sidebar" shadow> 
     <SideBarContent />
    </b-sidebar>
  </b-navbar>
</div>

   
</template>

<script>

import SideBarContent from './SideBarContent.vue'
    export default {
        name: 'Header',
        sidebarButton: false,
        components:{
          SideBarContent
        }
      
    }
</script>