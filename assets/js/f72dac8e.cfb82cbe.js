"use strict";(self.webpackChunkcaso_7=self.webpackChunkcaso_7||[]).push([[673],{4135:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=a(4848),o=a(8453);const t={sidebar_position:1},i="Light.css",d={id:"Light.css",title:"Light.css",description:"En nuestro primer avance hicimos cambios en el light.css y estamos tomando como ejemplo Microsoft Azure.",source:"@site/docs/Light.css.md",sourceDirName:".",slug:"/Light.css",permalink:"/caso7/docs/Light.css",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Light.css.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Theme.css",permalink:"/caso7/docs/theme.css"}},l={},c=[];function b(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"lightcss",children:"Light.css"}),"\n",(0,r.jsx)(e.h1,{id:"bienvenidos",children:"Bienvenidos"}),"\n",(0,r.jsxs)(e.p,{children:["En nuestro primer avance hicimos cambios en el ",(0,r.jsx)(e.strong,{children:"light.css"})," y estamos tomando como ejemplo Microsoft Azure.\nCambiamos la fuente del texto de la p\xe1gina, colores de fuente, borde de los contenedores y colores de fondo.\nA continuaci\xf3n el C\xf3digo CSS."]}),"\n",(0,r.jsx)(e.h1,{id:"c\xf3digo-css",children:"C\xf3digo CSS"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-css",children:"@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap');\n\nhtml, body {\n    background: #f5fafe;\n    font-family: \"Segoe UI\", Tahoma, Arial, sans-serif;\n    color: black;\n}\nul.nav-main li .nav-children li a {\n    padding: 5px 5px 5px 30px;\n    margin-bottom: 2px;\n}\n\nul.nav-main li.nav-active:not(.nav-parent) > a, ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {\n    box-shadow: none;\n    border-radius: 6px !important;\n    background: transparent;\n}\nul.nav-main li li a:hover {\n    padding-left: 35px !important;\n}\nul.nav-main li a:hover::before {\n    left: 23px !important;\n}\nul.nav-main li .nav-children li a:after {\n    padding: 6px 10px;\n    background: rgb(255 255 255 / 50%);\n}\n.tab-navigation nav > ul > li.active ul li a:hover,\n.header-nav-main.header-nav-main-light .dropdown-menu > li > a:hover,\n.header-nav-main.header-nav-main-light .dropdown-menu > li > a:focus,\n.header.header-nav-menu .header-nav-main.header-nav-main-light .dropdown-menu > li > a:focus,\n.toggle > label:hover {\n    background: #f1f3f4;\n}\nul.nav-main li.nav-expanded > a,\nul.nav-main li.nav-parent > ul.nav-children {\n    background-color: #f7faff;\n}\nul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a{\n    color: #fff !important;\n}\nul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a::before {\n    border-color: #e1f1ff;\n    background: #e1f1ff;\n}\n\nul.nav-main li .nav-children li a:hover,\nul.nav-main li .nav-children li a:focus,\n.card-footer-btn-group a,\n.note-editor .note-toolbar {\n    background-color: #fff;\n}\n\nul.nav-main li .nav-children li a:after {\n    padding: 6px 15px;\n}\n.card-body {\n    background: #ffffff;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\nspan.badge.bg-secondary.text-white.bg-info {\n    background: rgb(0 116 255 / 20%) !important;\n    color: #0074ff !important;\n}\n.bg-info,\nhtml .card-primary .card-header {\n    background: #0074ff !important;\n}\n.btn-custom {\n    background-color: #0074ff;\n}\n.btn-custom:hover, .btn-custom.hover {\n    background-color: #002183;\n    border-color: #002183;\n}\n.page-item.active .page-link {\n    background-color: #0074ff !important;\n    border-color: unset !important;\n}\n.notifications .notification-menu .notification-title {\n    background: #0074ff;\n}\n.notifications .notification-menu:before, .notifications .notification-icon:before {\n    border-bottom-color: #0074ff;\n}\nlabel {\n    margin-bottom: 0;\n}\nlabel.control-label {\n    margin-top: 8px;\n}\n\n.text-info {\n    color: #0074ff !important;\n}\n.btn-primary {\n    background-color: #0074ff;\n    border-color: #0074ff;\n}\n.sidebar-left .sidebar-header{\n    margin-bottom: 0;\n}\nnav#menu {\n    padding-top: 10px;\n}\ntable,\n.table,\n.el-dialog__body,\n.invoice address,\nhtml.fixed.sidebar-white .sidebar-left a,\nul.nav-main li.nav-parent > a:after {\n    color: black;\n}\n\n.el-input__inner,\n.el-textarea__inner {\n    border: 1px solid #EAEEF7;\n    color: #031a6e;\n    background-color: #f7f8fa;\n}\n.el-input__inner:hover {\n    border-color: #b3bad3;\n}\n.el-input__inner:focus {\n    border-color: #1478fa;\n    background: #fff;\n}\n.el-checkbox {\n    color: #60769a;\n}\nhtml.fixed.sidebar-white .sidebar-left a:hover,\nhtml.fixed.sidebar-white .sidebar-left a:active,\nhtml.fixed.sidebar-white .sidebar-left a:focus {\n    color: #0074ff;\n}\n.el-dialog {\n    border-radius: 12px;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\n.el-dialog__wrapper {\n    background: rgba(0, 0, 0, .25);\n}\nul.nav-main li.nav-description {\n    padding: .5rem;\n    line-height: 1rem;\n    text-align: center;\n    border-bottom: 1px solid #f3f3f3;\n    margin-top: 10px;\n    color: #60769a;\n    font-weight: bold;\n}\n.border-left {\n    border-left: none !important;\n}\n\n.card-body,\n.card.card-dashboard.border{\n    border: none !important;\n}\n.card-body label:hover{\n    text-decoration: underline;\n}\n.card .table th, .table td {\n    border-top: unset;\n}\nhtml.sidebar-left-collapsed .sidebar-left .nav-main > li > a {\n    padding-left: 10px;\n}\n.header .logo-container .topbar-links {\n    margin-top: 4px;\n    height: 50px;\n    background: #0078d4;\n    border-radius: 4px;\n    color: #fff;\n}\n.header .logo-container .topbar-links:last-of-type i {\n    margin: 0px;\n}\n.header .logo-container .topbar-links:hover {\n    background-color: rgb(0 116 255);\n    color: #fff;\n}\n.sidebar-toggle {\n    border-right: unset;\n}\n.el-tabs__item {\n    color: #657b9d;\n}\n.el-button--primary {\n    color: #fff;\n    background-color: #409eff;\n    border-color: #409eff;\n}\n.btn-danger {\n    background-color: #fc4e4b;\n    border-color: #fc4e4b;\n    box-shadow: unset;\n}\n.notifications > li .notification-icon .badge,\n.badge-danger {\n    background: rgb(252 78 75 / 20%);\n    color: #fc4f4b;\n    font-weight: bold;\n}\n.disable_color {\n    color: #fc4f4b;\n}\n.btn-info {\n    background-color: #3bbefc;\n    border-color: #3bbefc;\n    box-shadow: unset;\n}\n.badge-info {\n    background: #fff !important;\n    color: #0071C8 !important;\n    font-weight: bold !important;\n}\nul.nav-main li .nav-children li a:before {\n    left: 18px;\n    width: 7px;\n    height: 7px;\n    border: 1px solid #b3becf;\n}\n.badge {\n    padding: 0.7em;\n}\n.btn-warning {\n    background-color: #ff9200;\n    border-color: #ff9200;\n    box-shadow: unset;\n}\na.text-info:hover, a.text-info:focus {\n    color: #002183 !important;\n}\nhtml.fixed.sidebar-white .sidebar-left, html.fixed.sidebar-white .sidebar-header, html.fixed.sidebar-white .sidebar-left .nano {\n    transition: all .15s ease;\n}\nhtml.sidebar-left-collapsed .sidebar-left .nano:hover {\n    width: 300px;\n    box-shadow: 0 30px 30px rgb(0 0 0 / 20%);\n}\n.btn-signin {\n    background-color: #0074ff;\n}\n.auth__image {\n    background-size: contain;\n}\n.auth a {\n    color: #0074ff;\n}\n.auth a, .auth h1, .auth h2, .auth h3, .auth h4, .auth h5, .auth h6, .auth label, .auth p, .auth span {\n    color: #60769a;\n    font-family: 'Poppins';\n}\n.form-control {\n    color: #0078d4;\n    border: none;\n    background-color: #0078d4;\n}\n\n/* .style-switcher .style-switcher-open {\n    display: none;\n} */\n.notifications > li .notification-icon .badge {\n    height: 15px;\n    border-radius: 4px;\n}\nhtml.sidebar-light:not(.dark):not(.sidebar-green):not(.sidebar-green) ul.nav-main > li.nav-active > a {\n    color: #0074ff;\n}\n.userbox .name,\n.userbox .role,\n.notifications > li .notification-icon i {\n    color: #fff !important;\n}\n.border.rounded-circle.text-center {\n    border-radius: 5px !important;\n    border: 1px solid #f0f3f4 !important;\n    background: #f0f3f4;\n    color: #60769a;\n}\n.sidebar-left .sidebar-header .logo img {\n    height: 40px;\n    border-radius: 2px;\n}\n.invoice table.table > thead:first-child > tr > th {\n    background-color: #f0f3f4;\n    border-bottom: 0px solid #dadada;\n    border-top: 0px solid #dadada;\n}\n.header .separator {\n    margin: 0 8px 0;\n    opacity: 0;\n}\n.text-danger{\n    color: #fc4f4b !important;\n}\n.table th, .table td {\n    padding: 0.5rem;\n    color: black;\n    font-size: 16px !important;\n}\n.btn.btn-xs {\n    margin-bottom: 4px;\n}\n.data-table-visible-columns {\n    right: 15px;\n    top: 15px;\n}\nspan.badge.bg-danger.text-white {\n    background: rgb(252 78 75 / 20%) !important;\n    color: #fc4f4b !important;\n}\nspan.badge.bg-secondary.text-white.bg-success,\nspan.badge.text-white.bg-success {\n    background: rgb(35 218 149 / 20%) !important;\n    color: #23da95 !important;\n}\n.btn-warning:hover, .btn-warning.hover {\n    background-color: #ffa71f;\n    border-color: #ffa71f;\n    box-shadow: none;\n}\n.btn-danger:hover, .btn-danger.hover {\n    background-color: #fc716f;\n    border-color: #fc716f;\n    box-shadow: none;\n}\n.btn-info:hover, .btn-info.hover {\n    background-color: #64cafc;\n    border-color: #64cafc;\n    box-shadow: none;\n}\n.page-header h2 {\n    border-bottom: none;\n}\n.page-header {\n    box-shadow: none !important;\n}\n\n.logo-container .fa-bullseye:before {\n    content: \"\\f0c9\";\n}\n.sidebar-toggle:hover {\n    background-color: #f0f3f4;\n}\nhtml.dark .sidebar-toggle:hover {\n    background-color: #161d31;\n}\n\n.notifications a.notification-icon.text-secondary {\n    color: #fff !important;\n}\n\n.el-collapse a {\n    background: #f7fafe;\n    padding: 4px 8px;\n    border-radius: 4px;\n}\n\n.table thead th{\n    border-bottom: 2px solid #f1f2f4;\n}\n.card-header,\n.header{\n    border-bottom: 1px solid #f1f2f4;\n}\n.card-footer {\n    border-top: 1px solid  #f1f2f4;\n}\nhtml.sidebar-light:not(.dark) .page-header .breadcrumbs a,\nhtml.sidebar-light:not(.dark) .page-header .breadcrumbs span {\n    color: #60769a;\n}\n.page-header .breadcrumbs li {\n    color: #f1f2f4;\n}\n.text-muted {\n    color: #808a9c !important;\n}\n.card.card-reports .card-title {\n    font-weight: bold;\n    color: #001f83;\n    background: #e8f1ff;\n    border-radius: 4px;\n    padding: 8px 16px;\n    margin-bottom: 20px;\n}\n\n\n.row.no-gutters .col div {\n    width: 100%;\n}\n\n.row.no-gutters .col {\n    display: flex;\n    align-items: stretch;\n    justify-content: center;\n}\n\n.card-body.pointer.rounded-0,\n.testimonial-group div .col-sm-3.pointer {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    border-radius: 8px !important;\n}\n.row.no-gutters .col .card div,\n.testimonial-group div .col-sm-3.pointer {\n    text-shadow: 0 0 2px rgb(0 0 0 / 20%);\n}\n.row.no-gutters .col .card div:hover{\n    transform:scale(1.15);\n    z-index:1;\n}\n.row.no-gutters .col:nth-child(2n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(2n) {\n    background: #808a9c !important;\n}\n.row.no-gutters .col:nth-child(3n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(3n) {\n    background: #0074ff !important;\n}\n.row.no-gutters .col:nth-child(5n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(5n) {\n    background: #ffc300 !important;\n}\n.row.no-gutters .col:nth-child(7n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(7n) {\n    background: #23da95 !important;\n}\n.row.no-gutters .col:nth-child(11n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(11n) {\n    background: #ff006c !important;\n}\n.row.no-gutters .col:nth-child(13n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(13n){\n    background: #5853f1 !important;\n}\n.row.no-gutters .col:nth-child(17n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(17n) {\n    background: #0c4873 !important;\n}\n.row.no-gutters .col:nth-child(19n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(19n) {\n    background: #00112e !important;\n}\n.row.no-gutters .col:nth-child(23n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(23n) {\n    background: #ff9200 !important;\n}\n.row.no-gutters .col:nth-child(29n) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(29n) {\n    background: #194523 !important;\n}\n.row.no-gutters .col:nth-child(1) .card div,\n.testimonial-group div .col-sm-3.pointer:nth-child(1) {\n    background: #031a6e !important;\n}\n\n.card-body.pointer.px-2.pt-2 p {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    /* -webkit-box-orient: vertical; */\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n.card-body.pointer.px-2.pt-2 .img-custom {\n    height: 150px !important;\n    object-fit: cover;\n}\n.card h5.font-weight-semibold.text-right.text-white {\n    margin: 0;\n}\n.card-footer.flex-wrap .el-row {\n    display: flex;\n    justify-content: space-between;\n}\na.ws-flotante {\n    border-radius: 0 !important;\n    transform: scale(0.85);\n}\n\n/************************************ tema morado ************************************/\n/* header */\nhtml.sidebar-blue .userbox.show .dropdown-menu a:hover {\n    background-color: #554AC6;\n}\nhtml.sidebar-blue .header .logo-container .topbar-links:hover {\n    background-color: #554AC6;\n    color: #fff;\n}\n/* panel derecho */\nhtml.sidebar-blue:not(.dark) .style-switcher,\nhtml.sidebar-blue:not(.dark) .style-switcher .style-switcher-open {\n    background-color: #f6f6f6;\n    color: #777;\n    border-left: 3px solid #e2e3e6;\n    border-top: 3px solid #e2e3e6;\n    border-bottom: 3px solid #e2e3e6;\n}\n.sidebar-blue:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a, .sidebar-blue:not(.dark) ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {\n    box-shadow: none;\n}\nhtml.sidebar-blue:not(.dark) .style-switcher h4 {\n    background-color: #f6f6f6;\n    color: #777;\n}\nhtml.sidebar-blue:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a {\n    background: #554AC6;\n    box-shadow: none;\n}\n/* cajas de contenido */\nhtml.sidebar-blue .card-header.bg-info {\n    background: #554AC6 !important;\n}\n/* panel izquierdo */\nhtml.sidebar-blue ul.nav-main li .nav-children li a:after {\n    background: transparent;\n}\n\n/************************************ tema gris ************************************/\n/* header */\nhtml.sidebar-gray .userbox.show .dropdown-menu a:hover {\n    background-color: #82868b;\n}\nhtml.sidebar-gray .header .logo-container .topbar-links:hover {\n    background-color: #82868b;\n    color: #fff;\n}\n/* panel derecho */\nhtml.sidebar-gray:not(.dark) .style-switcher,\nhtml.sidebar-gray:not(.dark) .style-switcher .style-switcher-open {\n    background-color: #f6f6f6;\n    color: #777;\n    border-left: 3px solid #e2e3e6;\n    border-top: 3px solid #e2e3e6;\n    border-bottom: 3px solid #e2e3e6;\n}\n.sidebar-gray:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a, .sidebar-gray:not(.dark) ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {\n    box-shadow: none;\n}\nhtml.sidebar-gray:not(.dark) .style-switcher h4 {\n    background-color: #f6f6f6;\n    color: #777;\n}\nhtml.sidebar-gray:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a {\n    background: #82868b;\n    box-shadow: none;\n}\n/* cajas de contenido */\nhtml.sidebar-gray .card-header.bg-info {\n    background: #82868b !important;\n}\n/* panel izquierdo */\nhtml.fixed.sidebar-gray .sidebar-left,\nhtml.fixed.sidebar-gray .sidebar-header,\nhtml.fixed.sidebar-gray .sidebar-left .nano {\n    background-color: #82868b !important;\n}\nhtml.fixed.sidebar-gray .sidebar-left a {\n    color: #fff;\n}\nhtml.fixed.sidebar-gray .sidebar-left a:hover,\nhtml.fixed.sidebar-gray .sidebar-left a:active,\nhtml.fixed.sidebar-gray .sidebar-left a:focus {\n    color: #fff !important;\n}\nhtml.fixed.sidebar-gray .sidebar-left a::after {\n    color: #fff;\n}\nhtml.fixed.sidebar-gray .sidebar-left a::before {\n    border-color: #fff !important;\n}\nhtml.fixed.sidebar-gray ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a::before {\n  background: #fff !important;\n}\nhtml.fixed.sidebar-gray .sidebar-left a:hover,\nhtml.fixed.sidebar-gray .sidebar-left a:active,\nhtml.fixed.sidebar-gray .sidebar-left a:focus,\nhtml.fixed.sidebar-gray.dark .sidebar-left a:hover,\nhtml.fixed.sidebar-gray.dark .sidebar-left a:active,\nhtml.fixed.sidebar-gray.dark .sidebar-left a:focus {\n    color: #fff;\n    background-color: #82868b !important;\n}\nhtml.fixed.sidebar-gray .sidebar-left a:hover::before,\nhtml.fixed.sidebar-gray .sidebar-left a:active::before,\nhtml.fixed.sidebar-gray .sidebar-left a:focus::before,\nhtml.fixed.sidebar-gray .sidebar-left a:hover::after,\nhtml.fixed.sidebar-gray .sidebar-left a:active::after,\nhtml.fixed.sidebar-gray .sidebar-left a:focus::after {\n    border-color: #fff;\n    color: #fff;\n}\nhtml.fixed.sidebar-gray ul.nav-main li.nav-expanded > a {\n  background: #707376 !important;\n  color: #fff !important;\n}\nul.fixed.sidebar-gray .nav-main > li.nav-active:not(.nav-expanded) > a {\n  border-radius: 6px 6px 6px 6px !important;\n}\nhtml.fixed.sidebar-gray ul.nav-main li.nav-parent > ul.nav-children {\n  background-color: #707376;\n}\nhtml.fixed.sidebar-gray .sidebar-left a:hover, html.fixed.sidebar-gray .sidebar-left a:active, html.fixed.sidebar-gray .sidebar-left a:focus {\n  color: #fff;\n  background-color: #707376;\n}\nhtml.fixed.sidebar-gray ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {\n  background: #616365;\n  color: #fff !important;\n}\nhtml.fixed.sidebar-gray .sidebar-left-collapsed .sidebar-left .nav-main > li > a {\n  border-radius: 6px 6px 6px 6px !important;\n}\nhtml.sidebar-gray ul.nav-main li.nav-active:not(.nav-parent) > a {\n  background: #707376;\n  box-shadow: none;\n}\n.sidebar-gray ul.nav-main li .nav-children li:not(.nav-parent) > a,\n.sidebar-gray ul.nav-main li .nav-children li a {\n  color: #fff;\n}\n.sidebar-gray .sidebar-left a::before {\n  color: #fff;\n  border-color: #4b4b4b !important;\n}\nhtml.sidebar-gray ul.nav-main li .nav-children li a:after {\n    background: transparent;\n}\n\n/************************************ tema verde ************************************/\n/* header */\nhtml.sidebar-green .userbox.show .dropdown-menu a:hover {\n    background-color: #1ca55a;\n}\nhtml.sidebar-green .header .logo-container .topbar-links:hover {\n      background-color: #1ca55a;\n      color: #fff;\n}\n/* panel izquierdo */\nhtml.sidebar-green ul.nav-main li .nav-children li a:after {\n    background: transparent;\n}\nhtml.sidebar-green ul.nav-main li.nav-active:not(.nav-parent) > a {\n    background: #1ca55a;\n    box-shadow: none;\n}\nhtml.fixed.sidebar-green ul.nav-main li.nav-expanded > a {\n    background-color: #1ca55a !important;\n    color: #fff !important;\n}\nhtml.fixed.sidebar-green .sidebar-left a:hover,\nhtml.fixed.sidebar-green .sidebar-left a:active,\nhtml.fixed.sidebar-green .sidebar-left a:focus,\nhtml.fixed.sidebar-green.dark .sidebar-left a:hover,\nhtml.fixed.sidebar-green.dark .sidebar-left a:active,\nhtml.fixed.sidebar-green.dark .sidebar-left a:focus {\n  color: #fff;\n  background-color: #1ca55a !important;\n}\n/* cajas de contenido */\nhtml.sidebar-green .card-header.bg-info {\n  background: #1ca55a !important;\n}\n\n/************************************ tema rojo ************************************/\n/* header */\nhtml.sidebar-red .userbox.show .dropdown-menu a:hover {\n    background-color: #dc3545;\n}\nhtml.sidebar-red .header .logo-container .topbar-links:hover {\n    background-color: #dc3545;\n}\n/* panel izquierdo */\nhtml.sidebar-red ul.nav-main li.nav-active:not(.nav-parent) > a {\n    background: #dc3545;\n    box-shadow: none;\n}\nhtml.sidebar-red ul.nav-main li .nav-children li a:after {\n    background: transparent;\n}\nhtml.fixed.sidebar-red ul.nav-main li.nav-expanded > a {\n    background-color: #dc3545 !important;\n    color: #fff !important;\n}\nhtml.fixed.sidebar-red .sidebar-left a:hover,\nhtml.fixed.sidebar-red .sidebar-left a:active,\nhtml.fixed.sidebar-red .sidebar-left a:focus,\nhtml.fixed.sidebar-red.dark .sidebar-left a:hover,\nhtml.fixed.sidebar-red.dark .sidebar-left a:active,\nhtml.fixed.sidebar-red.dark .sidebar-left a:focus {\n  color: #fff;\n  background-color: #dc3545 !important;\n}\n/* panel derecho */\nhtml.sidebar-red:not(.dark) .style-switcher,\nhtml.sidebar-red:not(.dark) .style-switcher .style-switcher-open {\n  background-color: #f6f6f6;\n  color: #777;\n  border-left: 3px solid #e2e3e6;\n  border-top: 3px solid #e2e3e6;\n  border-bottom: 3px solid #e2e3e6;\n}\nhtml.sidebar-red:not(.dark) .style-switcher h4 {\n  background-color: #f6f6f6;\n  color: #777;\n}\nhtml.sidebar-red:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a {\n  background: #dc3545;\n  box-shadow: none;\n}\n/* cajas de contenido */\nhtml.sidebar-red .card-header.bg-info {\n  background: #dc3545 !important;\n}\n/* botones */\nhtml.sidebar-red .el-button--primary, html.sidebar-red .btn-custom {\n    color: #FFFFFF;\n    background-color: #dc3545;\n    border-color: #dc3545;\n  }\n\n/************************************ tema naranja ************************************/\n/* header */\nhtml.sidebar-warning .userbox.show .dropdown-menu a:hover {\n    background-color: #dd8028;\n}\nhtml.sidebar-warning .header .logo-container .topbar-links:hover {\n    background-color: #dd8028;\n}\n/* panel izquierdo */\nhtml.sidebar-warning ul.nav-main li.nav-active:not(.nav-parent) > a {\n    background: #dd8028;\n    box-shadow: none;\n}\nhtml.sidebar-warning ul.nav-main li .nav-children li a:after {\n    background: transparent;\n}\nhtml.fixed.sidebar-warning ul.nav-main li.nav-expanded > a {\n    background-color: #dd8028 !important;\n    color: #fff !important;\n}\nhtml.fixed.sidebar-warning .sidebar-left a:hover,\nhtml.fixed.sidebar-warning .sidebar-left a:active,\nhtml.fixed.sidebar-warning .sidebar-left a:focus,\nhtml.fixed.sidebar-warning.dark .sidebar-left a:hover,\nhtml.fixed.sidebar-warning.dark .sidebar-left a:active,\nhtml.fixed.sidebar-warning.dark .sidebar-left a:focus {\n  color: #fff;\n  background-color: #dd8028 !important;\n}\n/* cajas de contenido */\nhtml.sidebar-warning .card-header.bg-info {\n  background: #dd8028 !important;\n}\n\n/* --------------------------- tema azul celeste --------------------------- */\n/* panel izquierdo */\nhtml.fixed.sidebar-ligth-blue .sidebar-left,\nhtml.fixed.sidebar-ligth-blue .sidebar-header,\nhtml.fixed.sidebar-ligth-blue .sidebar-left .nano {\n    background-color: #00cfe8 !important;\n}\nhtml.fixed.sidebar-ligth-blue .sidebar-left a {\n    color: #fff;\n}\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:hover,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:active,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:focus {\n    color: #fff !important;\n}\nhtml.fixed.sidebar-ligth-blue .sidebar-left a::after {\n    color: #fff;\n}\nhtml.fixed.sidebar-ligth-blue .sidebar-left a::before {\n    border-color: #fff !important;\n}\nhtml.fixed.sidebar-ligth-blue ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a::before {\n  background: #fff !important;\n}\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:hover,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:active,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:focus {\n    color: #fff;\n    background-color: transparent;\n}\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:hover::before,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:active::before,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:focus::before,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:hover::after,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:active::after,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:focus::after {\n    border-color: #fff;\n    color: #fff;\n}\nhtml.fixed.sidebar-ligth-blue ul.nav-main li.nav-expanded > a,\nhtml.fixed.sidebar-ligth-blue.dark ul.nav-main li.nav-expanded > a {\n  background-color: #00a1b3 !important;\n  color: #fff !important;\n}\nul.fixed.sidebar-ligth-blue .nav-main > li.nav-active:not(.nav-expanded) > a {\n  border-radius: 6px 6px 6px 6px !important;\n}\nhtml.fixed.sidebar-ligth-blue ul.nav-main li.nav-parent > ul.nav-children {\n  background-color: #00a1b3;\n}\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:hover,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:active,\nhtml.fixed.sidebar-ligth-blue .sidebar-left a:focus,\nhtml.fixed.sidebar-ligth-blue.dark .sidebar-left a:hover,\nhtml.fixed.sidebar-ligth-blue.dark .sidebar-left a:active,\nhtml.fixed.sidebar-ligth-blue.dark .sidebar-left a:focus {\n  color: #fff;\n  background-color: #00a1b3 !important;\n}\nhtml.fixed.sidebar-ligth-blue ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {\n  background: #007582;\n  color: #fff !important;\n}\nhtml.fixed.sidebar-ligth-blue .sidebar-left-collapsed .sidebar-left .nav-main > li > a {\n  border-radius: 6px 6px 6px 6px !important;\n}\nhtml.sidebar-ligth-blue ul.nav-main li.nav-active:not(.nav-parent) > a {\n  background: #00a1b3;\n  box-shadow: none;\n}\n/* header */\nhtml.sidebar-ligth-blue .userbox.show .dropdown-menu a:hover {\n  background-color: #00cfe8;\n}\nhtml.sidebar-ligth-blue .header .logo-container .topbar-links:hover {\n    background-color: #00cfe8;\n}\nhtml.sidebar-ligth-blue ul.nav-main li .nav-children li a:after {\n    background: transparent;\n}\n/* cajas de contenido */\nhtml.sidebar-ligth-blue .card-header.bg-info {\n  background: #00cfe8 !important;\n}\n\n\n/* --------------------------- tema noche --------------------------- */\nhtml.dark .header .logo-container .topbar-links {\n    background: #161d31;\n}\n/* html.dark .header .logo-container .topbar-links:hover {\n    background: #161d31d1;\n} */\nhtml.dark ul.nav-main li .nav-children li a:after {\n    background: transparent;\n}\n\n/* -------- config -------- */\nhtml.dark .card.card-dashboard .card-title, html.dark .card.card-dashboard small.text-muted {\n    background: #283046;\n}\n/* menu top */\n.fix-m {\n    margin-bottom: -4px;\n    margin-top: 5px;\n}\n\n/* --------------------------- tema light --------------------------- */\nhtml.sidebar-light .userbox.show .dropdown-menu a:hover {\n    background-color: #0067b8;\n}\n\n/* -------------------------- botones -------------------------- */\n/* -------------------------- white -------------------------- */\nhtml.sidebar-white .el-button--primary {\n    color: #FFFFFF;\n    background-color: #0071c8;\n    border-color: #0071c8;\n    font-weight: bold;\n    height: 30px;\n    width: 30px;\n    font-size: 16px;\n    \n}\nhtml.sidebar-white .el-button--primary .el-icon-view{\n    font-size: 13px;\n}\nhtml.sidebar-white .el-button--danger{\n    background-color: #0071c8;\n    border-color: #0071c8;\n} \nhtml.sidebar-white .el-button--danger:hover{\n    background-color: #005ca2;\n    border-color: #005ca2;\n}\n.header .logo-container .topbar-links:hover{\n    background-color: #0071c8;\n}\n.el-select-dropdown__item{\n    color: black !important;\n}\nhtml.sidebar-white .el-button--primary:hover{\n    background-color: #005ca2;\n    border-color: #005ca2;\n}\n\nhtml.sidebar-white .el-button--default{\n    color: black;\n    height: 40px;\n    width: 100px;\n    border-color: black;\n    font-size: 16px;\n}\n"})})]})}function s(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(b,{...n})}):b(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>d});var r=a(6540);const o={},t=r.createContext(o);function i(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);