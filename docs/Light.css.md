---
sidebar_position: 1
---

# Light.css

# Bienvenidos

En nuestro primer avance hicimos cambios en el **light.css** y estamos tomando como ejemplo Microsoft Azure.
Cambiamos la fuente del texto de la página, colores de fuente, borde de los contenedores y colores de fondo.
A continuación el Código CSS.

# Código CSS 

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html, body {
    background: #f5fafe;
    font-family: "Segoe UI", Tahoma, Arial, sans-serif;
    color: black;
}
ul.nav-main li .nav-children li a {
    padding: 5px 5px 5px 30px;
    margin-bottom: 2px;
}

ul.nav-main li.nav-active:not(.nav-parent) > a, ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {
    box-shadow: none;
    border-radius: 6px !important;
    background: transparent;
}
ul.nav-main li li a:hover {
    padding-left: 35px !important;
}
ul.nav-main li a:hover::before {
    left: 23px !important;
}
ul.nav-main li .nav-children li a:after {
    padding: 6px 10px;
    background: rgb(255 255 255 / 50%);
}
.tab-navigation nav > ul > li.active ul li a:hover,
.header-nav-main.header-nav-main-light .dropdown-menu > li > a:hover,
.header-nav-main.header-nav-main-light .dropdown-menu > li > a:focus,
.header.header-nav-menu .header-nav-main.header-nav-main-light .dropdown-menu > li > a:focus,
.toggle > label:hover {
    background: #f1f3f4;
}
ul.nav-main li.nav-expanded > a,
ul.nav-main li.nav-parent > ul.nav-children {
    background-color: #f7faff;
}
ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a{
    color: black !important;
}
ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a::before {
    border-color: #e1f1ff;
    background: #e1f1ff;
}

ul.nav-main li .nav-children li a:hover,
ul.nav-main li .nav-children li a:focus,
.card-footer-btn-group a,
.note-editor .note-toolbar {
    background-color: #fff;
}
.nav-expanded .text-danger{
    color: black !important;
}
.nav-expanded .text-danger:hover {
    color: #0074ff !important;
}
.nav-expanded .text-danger:active {
    color: black !important;
}
ul.nav-main li .nav-children li a:after {
    padding: 6px 15px;
}
.card-body {
    background: #ffffff;
    -webkit-box-shadow: none;
    box-shadow: none;
}
span.badge.bg-secondary.text-white.bg-info {
    background: rgb(0 116 255 / 20%) !important;
    color: #0074ff !important;
}
.bg-info,
html .card-primary .card-header {
    background: #0067b8 !important;
}
.btn-custom {
    background-color: #0067b8;
    font-weight: bold;
}
.btn-custom:hover, .btn-custom.hover {
    background-color: #015ba1;
    border-color: #015ba1;
}
.page-item.active .page-link {
    background-color: #0074ff !important;
    border-color: unset !important;
}
.notifications .notification-menu .notification-title {
    background: #0074ff;
}
.notifications .notification-menu:before, .notifications .notification-icon:before {
    border-bottom-color: #0074ff;
}
label {
    margin-bottom: 0;
}
label.control-label {
    margin-top: 8px;
}

.text-info {
    color: black !important;
}
.btn-primary {
    background-color: #0067b8;
    border-color: #0067b8;
    font-weight: bold;
}
.btn-primary:hover {
    background-color: #0059a0;
    border-color: #0059a0;
    box-shadow: none;
    font-weight: bold;
}
.sidebar-left .sidebar-header{
    margin-bottom: 0;
}
nav#menu {
    padding-top: 10px;
}
table,
.table,
.el-dialog__body,
.invoice address,
html.fixed.sidebar-white .sidebar-left a,
ul.nav-main li.nav-parent > a:after {
    color: black;
}

.el-input__inner, .el-textarea__inner {
    border: 1px solid black;
    color: #031a6e;
    background-color: #f7f8fa;
}
.el-input--small .el-input__inner:hover {
    border-color: black !important;
}
.el-input__inner:hover {
    border-color: black;
}
.el-textarea__inner:hover {
    border-color: black;
}
.el-select .el-input.is-focus .el-input__inner{
    border-color: black;
}
.el-input__inner:focus {
    border-color: black;
    background: #fff;
}
.el-checkbox {
    color: black;
}
.el-checkbox__input.is-checked+.el-checkbox__label{
    color: #0067b8;
}
.el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #0067b8;
    border-color: #0067b8;
}

html.fixed.sidebar-white .sidebar-left a:hover,
html.fixed.sidebar-white .sidebar-left a:active,
html.fixed.sidebar-white .sidebar-left a:focus {
    color: #0074ff;
}
.el-dialog {
    border-radius: 12px;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.el-dialog__wrapper {
    background: rgba(0, 0, 0, .25);
}
ul.nav-main li.nav-description {
    padding: .5rem;
    line-height: 1rem;
    text-align: center;
    border-bottom: 1px solid #f3f3f3;
    margin-top: 10px;
    color: #60769a;
    font-weight: bold;
}
.border-left {
    border-left: none !important;
}

.card-body,
.card.card-dashboard.border{
    border: none !important;
}
.card-body label:hover{
    text-decoration: underline;
}
.card .table th, .table td {
    border-top: unset;
}
html.sidebar-left-collapsed .sidebar-left .nav-main > li > a {
    padding-left: 10px;
}
.header .logo-container .topbar-links {
    margin-top: 4px;
    height: 50px;
    background: #0078d4;
    border-radius: 4px;
    color: #fff;
}
.header .logo-container .topbar-links:last-of-type i {
    margin: 0px;
}
.header .logo-container .topbar-links:hover {
    background-color: rgb(0 116 255);
    color: #fff;
}
.sidebar-toggle {
    border-right: unset;
}
.el-tabs__item {
    color: #657b9d;
}
.el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.btn-danger {
    background-color: transparent ;
    border-color: black;
    box-shadow: unset;
    color: black;
}
.btn-danger:hover {
    background-color: #eaeaea !important;
    border-color: black !important;
    box-shadow: unset;
    color: black;
}
.notifications > li .notification-icon .badge,
.badge-danger {
    background: rgb(252 78 75 / 20%);
    color: #fc4f4b;
    font-weight: bold;
}
.disable_color {
    color: #fc4f4b;
}
.btn-info {
    background-color: #0071c8;
    border-color: #0071c8;
    box-shadow: unset;
    font-weight: bold;
}
.btn-info:hover {
    background-color: #005fa8 !important;
    border-color: #005fa8 !important;
    box-shadow: unset;
    font-weight: bold;
}
.badge-info {
    background: #fff !important;
    color: #0071C8 !important;
    font-weight: bold !important;
}
ul.nav-main li .nav-children li a:before {
    left: 18px;
    width: 7px;
    height: 7px;
    border: 1px solid #b3becf;
}
.badge {
    padding: 0.7em;
}
.btn-warning {
    background-color: #ff9200;
    border-color: #ff9200;
    box-shadow: unset;
}
a.text-info:hover, a.text-info:focus {
    color: #002183 !important;
}
html.fixed.sidebar-white .sidebar-left, html.fixed.sidebar-white .sidebar-header, html.fixed.sidebar-white .sidebar-left .nano {
    transition: all .15s ease;
}
html.sidebar-left-collapsed .sidebar-left .nano:hover {
    width: 300px;
    box-shadow: 0 30px 30px rgb(0 0 0 / 20%);
}
.btn-signin {
    background-color: #0074ff;
}
.auth__image {
    background-size: contain;
}
.auth a {
    color: #0074ff;
}
.auth a, .auth h1, .auth h2, .auth h3, .auth h4, .auth h5, .auth h6, .auth label, .auth p, .auth span {
    color: #60769a;
    font-family: 'Poppins';
}
.form-control {
    color: #0078d4;
    border: none;
    background-color: #0078d4;
}

/* .style-switcher .style-switcher-open {
    display: none;
} */
.notifications > li .notification-icon .badge {
    height: 15px;
}
html.sidebar-light:not(.dark):not(.sidebar-green):not(.sidebar-green) ul.nav-main > li.nav-active > a {
    color: #0074ff;
}
.userbox .name,
.userbox .role,
.notifications > li .notification-icon i {
    color: #fff !important;
}
.border.rounded-circle.text-center {
    border-radius: 5px !important;
    border: 1px solid #f0f3f4 !important;
    background: #f0f3f4;
    color: #60769a;
}
.sidebar-left .sidebar-header .logo img {
    height: 40px;
    border-radius: 2px;
}
.invoice table.table > thead:first-child > tr > th {
    background-color: #f0f3f4;
    border-bottom: 0px solid #dadada;
    border-top: 0px solid #dadada;
}
.header .separator {
    margin: 0 8px 0;
    opacity: 0;
}
.text-danger{
    color: #fc4f4b !important;
}
.table th, .table td {
    padding: 0.5rem;
    color: black;
    font-size: 16px !important;
}
.el-dropdown span .el-button{
    width: 35px !important;
    color: black !important;
    border-color: black !important;
}
.btn.btn-xs {
    margin-bottom: 4px;
}
.data-table-visible-columns {
    right: 15px;
    top: 15px;
}
span.badge.bg-danger.text-white {
    background: rgb(252 78 75 / 20%) !important;
    color: #fc4f4b !important;
}
span.badge.bg-secondary.text-white.bg-success,
span.badge.text-white.bg-success {
    background: rgb(35 218 149 / 20%) !important;
    color: #23da95 !important;
}
.btn-warning:hover, .btn-warning.hover {
    background-color: #ffa71f;
    border-color: #ffa71f;
    box-shadow: none;
}
.btn-danger:hover, .btn-danger.hover {
    background-color: #fc716f;
    border-color: #fc716f;
    box-shadow: none;
}
.btn-info:hover, .btn-info.hover {
    background-color: #64cafc;
    border-color: #64cafc;
    box-shadow: none;
}
.page-header h2 {
    border-bottom: none;
}
.page-header {
    box-shadow: none !important;
}

.logo-container .fa-bullseye:before {
    content: "\f0c9";
}
.sidebar-toggle:hover {
    background-color: #f0f3f4;
}
html.dark .sidebar-toggle:hover {
    background-color: #161d31;
}

.notifications a.notification-icon.text-secondary {
    color: #fff !important;
}

.el-collapse a {
    background: #f7fafe;
    padding: 4px 8px;
    border-radius: 4px;
}

.table thead th{
    border-bottom: 2px solid #f1f2f4;
}
.card-header,
.header{
    border-bottom: 1px solid #f1f2f4;
}
.card-footer {
    border-top: 1px solid  #f1f2f4;
}
html.sidebar-light:not(.dark) .page-header .breadcrumbs a,
html.sidebar-light:not(.dark) .page-header .breadcrumbs span {
    color: black;
}
.page-header .breadcrumbs li {
    color: #f1f2f4;
}
.text-muted {
    color: #808a9c !important;
}
.card.card-reports .card-title {
    font-weight: bold;
    color: #fff;
    background: #0067b8;
    border-radius: 4px;
    padding: 8px 16px;
    margin-bottom: 20px;
    text-align: center;
}


.row.no-gutters .col div {
    width: 100%;
}

.row.no-gutters .col {
    display: flex;
    align-items: stretch;
    justify-content: center;
}

.card-body.pointer.rounded-0,
.testimonial-group div .col-sm-3.pointer {
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 8px !important;
}
.row.no-gutters .col .card div,
.testimonial-group div .col-sm-3.pointer {
    text-shadow: 0 0 2px rgb(0 0 0 / 20%);
}
.row.no-gutters .col .card div:hover{
    transform:scale(1.15);
    z-index:1;
}
.row.no-gutters .col:nth-child(2n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(2n) {
    background: #808a9c !important;
}
.row.no-gutters .col:nth-child(3n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(3n) {
    background: #0074ff !important;
}
.row.no-gutters .col:nth-child(5n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(5n) {
    background: #ffc300 !important;
}
.row.no-gutters .col:nth-child(7n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(7n) {
    background: #23da95 !important;
}
.row.no-gutters .col:nth-child(11n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(11n) {
    background: #ff006c !important;
}
.row.no-gutters .col:nth-child(13n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(13n){
    background: #5853f1 !important;
}
.row.no-gutters .col:nth-child(17n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(17n) {
    background: #0c4873 !important;
}
.row.no-gutters .col:nth-child(19n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(19n) {
    background: #00112e !important;
}
.row.no-gutters .col:nth-child(23n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(23n) {
    background: #ff9200 !important;
}
.row.no-gutters .col:nth-child(29n) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(29n) {
    background: #194523 !important;
}
.row.no-gutters .col:nth-child(1) .card div,
.testimonial-group div .col-sm-3.pointer:nth-child(1) {
    background: #031a6e !important;
}

.card-body.pointer.px-2.pt-2 p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    /* -webkit-box-orient: vertical; */
    text-overflow: ellipsis;
    overflow: hidden;
}
.card-body.pointer.px-2.pt-2 .img-custom {
    height: 150px !important;
    object-fit: cover;
}
.card h5.font-weight-semibold.text-right.text-white {
    margin: 0;
}
.card-footer.flex-wrap .el-row {
    display: flex;
    justify-content: space-between;
}
a.ws-flotante {
    border-radius: 0 !important;
    transform: scale(0.85);
}

/************************************ tema morado ************************************/
/* header */
html.sidebar-blue .userbox.show .dropdown-menu a:hover {
    background-color: #554AC6;
}
html.sidebar-blue .header .logo-container .topbar-links:hover {
    background-color: #554AC6;
    color: #fff;
}
/* panel derecho */
html.sidebar-blue:not(.dark) .style-switcher,
html.sidebar-blue:not(.dark) .style-switcher .style-switcher-open {
    background-color: #f6f6f6;
    color: #777;
    border-left: 3px solid #e2e3e6;
    border-top: 3px solid #e2e3e6;
    border-bottom: 3px solid #e2e3e6;
}
.sidebar-blue:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a, .sidebar-blue:not(.dark) ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {
    box-shadow: none;
}
html.sidebar-blue:not(.dark) .style-switcher h4 {
    background-color: #f6f6f6;
    color: #777;
}
html.sidebar-blue:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a {
    background: #554AC6;
    box-shadow: none;
}
/* cajas de contenido */
html.sidebar-blue .card-header.bg-info {
    background: #554AC6 !important;
}
/* panel izquierdo */
html.sidebar-blue ul.nav-main li .nav-children li a:after {
    background: transparent;
}

/************************************ tema gris ************************************/
/* header */
html.sidebar-gray .userbox.show .dropdown-menu a:hover {
    background-color: #82868b;
}
html.sidebar-gray .header .logo-container .topbar-links:hover {
    background-color: #82868b;
    color: #fff;
}
/* panel derecho */
html.sidebar-gray:not(.dark) .style-switcher,
html.sidebar-gray:not(.dark) .style-switcher .style-switcher-open {
    background-color: #f6f6f6;
    color: #777;
    border-left: 3px solid #e2e3e6;
    border-top: 3px solid #e2e3e6;
    border-bottom: 3px solid #e2e3e6;
}
.sidebar-gray:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a, .sidebar-gray:not(.dark) ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {
    box-shadow: none;
}
html.sidebar-gray:not(.dark) .style-switcher h4 {
    background-color: #f6f6f6;
    color: #777;
}
html.sidebar-gray:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a {
    background: #82868b;
    box-shadow: none;
}
/* cajas de contenido */
html.sidebar-gray .card-header.bg-info {
    background: #82868b !important;
}
/* panel izquierdo */
html.fixed.sidebar-gray .sidebar-left,
html.fixed.sidebar-gray .sidebar-header,
html.fixed.sidebar-gray .sidebar-left .nano {
    background-color: #82868b !important;
}
html.fixed.sidebar-gray .sidebar-left a {
    color: #fff;
}
html.fixed.sidebar-gray .sidebar-left a:hover,
html.fixed.sidebar-gray .sidebar-left a:active,
html.fixed.sidebar-gray .sidebar-left a:focus {
    color: #fff !important;
}
html.fixed.sidebar-gray .sidebar-left a::after {
    color: #fff;
}
html.fixed.sidebar-gray .sidebar-left a::before {
    border-color: #fff !important;
}
html.fixed.sidebar-gray ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a::before {
  background: #fff !important;
}
html.fixed.sidebar-gray .sidebar-left a:hover,
html.fixed.sidebar-gray .sidebar-left a:active,
html.fixed.sidebar-gray .sidebar-left a:focus,
html.fixed.sidebar-gray.dark .sidebar-left a:hover,
html.fixed.sidebar-gray.dark .sidebar-left a:active,
html.fixed.sidebar-gray.dark .sidebar-left a:focus {
    color: #fff;
    background-color: #82868b !important;
}
html.fixed.sidebar-gray .sidebar-left a:hover::before,
html.fixed.sidebar-gray .sidebar-left a:active::before,
html.fixed.sidebar-gray .sidebar-left a:focus::before,
html.fixed.sidebar-gray .sidebar-left a:hover::after,
html.fixed.sidebar-gray .sidebar-left a:active::after,
html.fixed.sidebar-gray .sidebar-left a:focus::after {
    border-color: #fff;
    color: #fff;
}
html.fixed.sidebar-gray ul.nav-main li.nav-expanded > a {
  background: #707376 !important;
  color: #fff !important;
}
ul.fixed.sidebar-gray .nav-main > li.nav-active:not(.nav-expanded) > a {
  border-radius: 6px 6px 6px 6px !important;
}
html.fixed.sidebar-gray ul.nav-main li.nav-parent > ul.nav-children {
  background-color: #707376;
}
html.fixed.sidebar-gray .sidebar-left a:hover, html.fixed.sidebar-gray .sidebar-left a:active, html.fixed.sidebar-gray .sidebar-left a:focus {
  color: #fff;
  background-color: #707376;
}
html.fixed.sidebar-gray ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {
  background: #616365;
  color: #fff !important;
}
html.fixed.sidebar-gray .sidebar-left-collapsed .sidebar-left .nav-main > li > a {
  border-radius: 6px 6px 6px 6px !important;
}
html.sidebar-gray ul.nav-main li.nav-active:not(.nav-parent) > a {
  background: #707376;
  box-shadow: none;
}
.sidebar-gray ul.nav-main li .nav-children li:not(.nav-parent) > a,
.sidebar-gray ul.nav-main li .nav-children li a {
  color: #fff;
}
.sidebar-gray .sidebar-left a::before {
  color: #fff;
  border-color: #4b4b4b !important;
}
html.sidebar-gray ul.nav-main li .nav-children li a:after {
    background: transparent;
}

/************************************ tema verde ************************************/
/* header */
html.sidebar-green .userbox.show .dropdown-menu a:hover {
    background-color: #1ca55a;
}
html.sidebar-green .header .logo-container .topbar-links:hover {
      background-color: #1ca55a;
      color: #fff;
}
/* panel izquierdo */
html.sidebar-green ul.nav-main li .nav-children li a:after {
    background: transparent;
}
html.sidebar-green ul.nav-main li.nav-active:not(.nav-parent) > a {
    background: #1ca55a;
    box-shadow: none;
}
html.fixed.sidebar-green ul.nav-main li.nav-expanded > a {
    background-color: #1ca55a !important;
    color: #fff !important;
}
html.fixed.sidebar-green .sidebar-left a:hover,
html.fixed.sidebar-green .sidebar-left a:active,
html.fixed.sidebar-green .sidebar-left a:focus,
html.fixed.sidebar-green.dark .sidebar-left a:hover,
html.fixed.sidebar-green.dark .sidebar-left a:active,
html.fixed.sidebar-green.dark .sidebar-left a:focus {
  color: #fff;
  background-color: #1ca55a !important;
}
/* cajas de contenido */
html.sidebar-green .card-header.bg-info {
  background: #1ca55a !important;
}

/************************************ tema rojo ************************************/
/* header */
html.sidebar-red .userbox.show .dropdown-menu a:hover {
    background-color: #dc3545;
}
html.sidebar-red .header .logo-container .topbar-links:hover {
    background-color: #dc3545;
}
/* panel izquierdo */
html.sidebar-red ul.nav-main li.nav-active:not(.nav-parent) > a {
    background: #dc3545;
    box-shadow: none;
}
html.sidebar-red ul.nav-main li .nav-children li a:after {
    background: transparent;
}
html.fixed.sidebar-red ul.nav-main li.nav-expanded > a {
    background-color: #dc3545 !important;
    color: #fff !important;
}
html.fixed.sidebar-red .sidebar-left a:hover,
html.fixed.sidebar-red .sidebar-left a:active,
html.fixed.sidebar-red .sidebar-left a:focus,
html.fixed.sidebar-red.dark .sidebar-left a:hover,
html.fixed.sidebar-red.dark .sidebar-left a:active,
html.fixed.sidebar-red.dark .sidebar-left a:focus {
  color: #fff;
  background-color: #dc3545 !important;
}
/* panel derecho */
html.sidebar-red:not(.dark) .style-switcher,
html.sidebar-red:not(.dark) .style-switcher .style-switcher-open {
  background-color: #f6f6f6;
  color: #777;
  border-left: 3px solid #e2e3e6;
  border-top: 3px solid #e2e3e6;
  border-bottom: 3px solid #e2e3e6;
}
html.sidebar-red:not(.dark) .style-switcher h4 {
  background-color: #f6f6f6;
  color: #777;
}
html.sidebar-red:not(.dark) ul.nav-main li.nav-active:not(.nav-parent) > a {
  background: #dc3545;
  box-shadow: none;
}
/* cajas de contenido */
html.sidebar-red .card-header.bg-info {
  background: #dc3545 !important;
}
/* botones */
html.sidebar-red .el-button--primary, html.sidebar-red .btn-custom {
    color: #FFFFFF;
    background-color: #dc3545;
    border-color: #dc3545;
  }

/************************************ tema naranja ************************************/
/* header */
html.sidebar-warning .userbox.show .dropdown-menu a:hover {
    background-color: #dd8028;
}
html.sidebar-warning .header .logo-container .topbar-links:hover {
    background-color: #dd8028;
}
/* panel izquierdo */
html.sidebar-warning ul.nav-main li.nav-active:not(.nav-parent) > a {
    background: #dd8028;
    box-shadow: none;
}
html.sidebar-warning ul.nav-main li .nav-children li a:after {
    background: transparent;
}
html.fixed.sidebar-warning ul.nav-main li.nav-expanded > a {
    background-color: #dd8028 !important;
    color: #fff !important;
}
html.fixed.sidebar-warning .sidebar-left a:hover,
html.fixed.sidebar-warning .sidebar-left a:active,
html.fixed.sidebar-warning .sidebar-left a:focus,
html.fixed.sidebar-warning.dark .sidebar-left a:hover,
html.fixed.sidebar-warning.dark .sidebar-left a:active,
html.fixed.sidebar-warning.dark .sidebar-left a:focus {
  color: #fff;
  background-color: #dd8028 !important;
}
/* cajas de contenido */
html.sidebar-warning .card-header.bg-info {
  background: #dd8028 !important;
}

/* --------------------------- tema azul celeste --------------------------- */
/* panel izquierdo */
html.fixed.sidebar-ligth-blue .sidebar-left,
html.fixed.sidebar-ligth-blue .sidebar-header,
html.fixed.sidebar-ligth-blue .sidebar-left .nano {
    background-color: #00cfe8 !important;
}
html.fixed.sidebar-ligth-blue .sidebar-left a {
    color: #fff;
}
html.fixed.sidebar-ligth-blue .sidebar-left a:hover,
html.fixed.sidebar-ligth-blue .sidebar-left a:active,
html.fixed.sidebar-ligth-blue .sidebar-left a:focus {
    color: #fff !important;
}
html.fixed.sidebar-ligth-blue .sidebar-left a::after {
    color: #fff;
}
html.fixed.sidebar-ligth-blue .sidebar-left a::before {
    border-color: #fff !important;
}
html.fixed.sidebar-ligth-blue ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a::before {
  background: #fff !important;
}
html.fixed.sidebar-ligth-blue .sidebar-left a:hover,
html.fixed.sidebar-ligth-blue .sidebar-left a:active,
html.fixed.sidebar-ligth-blue .sidebar-left a:focus {
    color: #fff;
    background-color: transparent;
}
html.fixed.sidebar-ligth-blue .sidebar-left a:hover::before,
html.fixed.sidebar-ligth-blue .sidebar-left a:active::before,
html.fixed.sidebar-ligth-blue .sidebar-left a:focus::before,
html.fixed.sidebar-ligth-blue .sidebar-left a:hover::after,
html.fixed.sidebar-ligth-blue .sidebar-left a:active::after,
html.fixed.sidebar-ligth-blue .sidebar-left a:focus::after {
    border-color: #fff;
    color: #fff;
}
html.fixed.sidebar-ligth-blue ul.nav-main li.nav-expanded > a,
html.fixed.sidebar-ligth-blue.dark ul.nav-main li.nav-expanded > a {
  background-color: #00a1b3 !important;
  color: #fff !important;
}
ul.fixed.sidebar-ligth-blue .nav-main > li.nav-active:not(.nav-expanded) > a {
  border-radius: 6px 6px 6px 6px !important;
}
html.fixed.sidebar-ligth-blue ul.nav-main li.nav-parent > ul.nav-children {
  background-color: #00a1b3;
}
html.fixed.sidebar-ligth-blue .sidebar-left a:hover,
html.fixed.sidebar-ligth-blue .sidebar-left a:active,
html.fixed.sidebar-ligth-blue .sidebar-left a:focus,
html.fixed.sidebar-ligth-blue.dark .sidebar-left a:hover,
html.fixed.sidebar-ligth-blue.dark .sidebar-left a:active,
html.fixed.sidebar-ligth-blue.dark .sidebar-left a:focus {
  color: #fff;
  background-color: #00a1b3 !important;
}
html.fixed.sidebar-ligth-blue ul.nav-main li .nav-children li.nav-active:not(.nav-parent) > a {
  background: #007582;
  color: #fff !important;
}
html.fixed.sidebar-ligth-blue .sidebar-left-collapsed .sidebar-left .nav-main > li > a {
  border-radius: 6px 6px 6px 6px !important;
}
html.sidebar-ligth-blue ul.nav-main li.nav-active:not(.nav-parent) > a {
  background: #00a1b3;
  box-shadow: none;
}
/* header */
html.sidebar-ligth-blue .userbox.show .dropdown-menu a:hover {
  background-color: #00cfe8;
}
html.sidebar-ligth-blue .header .logo-container .topbar-links:hover {
    background-color: #00cfe8;
}
html.sidebar-ligth-blue ul.nav-main li .nav-children li a:after {
    background: transparent;
}
/* cajas de contenido */
html.sidebar-ligth-blue .card-header.bg-info {
  background: #00cfe8 !important;
}


/* --------------------------- tema noche --------------------------- */
html.dark .header .logo-container .topbar-links {
    background: #161d31;
}
/* html.dark .header .logo-container .topbar-links:hover {
    background: #161d31d1;
} */
html.dark ul.nav-main li .nav-children li a:after {
    background: transparent;
}

/* -------- config -------- */
html.dark .card.card-dashboard .card-title, html.dark .card.card-dashboard small.text-muted {
    background: #283046;
}
/* menu top */
.fix-m {
    margin-bottom: -4px;
    margin-top: 5px;
}

/* --------------------------- tema light --------------------------- */
html.sidebar-light .userbox.show .dropdown-menu a:hover {
    background-color: #0067b8;
}

/* -------------------------- botones -------------------------- */
/* -------------------------- white -------------------------- */
html.sidebar-white .el-button--primary {
    color: #fff;
    background-color: #0071c8;
    border-color: #0071c8;
    font-weight: bold;
    height: 30px;
    width: 215px;
    font-size: 14px;
}
html.sidebar-white .is-circle{
    color: #fff;
    background-color: #0071c8;
    border-color: #0071c8;
    font-weight: bold;
    height: 30px;
    width: 30px;
    font-size: 14px;
}

html.sidebar-white .el-button--primary .el-icon-view{
    font-size: 13px;
}
html.sidebar-white .el-button--danger{
    background-color: #0071c8;
    border-color: #0071c8;
} 
html.sidebar-white .el-button--danger:hover{
    background-color: #005ca2;
    border-color: #005ca2;
}
.header .logo-container .topbar-links:hover{
    background-color: #0071c8;
}
.el-select-dropdown__item{
    color: black !important;
}
html.sidebar-white .el-button--primary:hover{
    background-color: #005ca2;
    border-color: #005ca2;
}

html.sidebar-white .el-button--default{
    color: #fff;
    height: 35px;
    width: 180px;
    border-color: #005ca2;
    font-size: 14px;
}
.col-sm-12 .btn-danger{
    border-color: black !important;
    background-color: transparent !important;
    color: black !important;
}
.col-auto .is-disabled{
    border-color: black !important;
    color: black !important;
}
.col-lg-7 .el-button{
    color: #fff !important;
    border-color: #005ca2 !important;
}
.col-lg-7 .el-button:hover {
    color: #fff !important;
    border-color: #004d87 !important;
    background-color: #005b9f !important;
}

.fa-tachometer-alt {
    color: #3d3d3d;
}
.pt-2 .el-button--success {
    color: #fff;
    background-color: #0067b8;
    border-color: #0067b8;
    font-weight: bold;
}
.pt-2 .el-button--success:hover {
    color: #fff;
    background-color: #005ba1;
    border-color: #005ba1;
}
.el-table th>.cell{
    color:black;
}
.el-table__empty-text{
    color: black;
}
.el-button--success.is-disabled{
    background-color: #0067b8;
    border-color: #0067b8;
    font-weight: bold;
}
.el-button--success.is-disabled:hover {
    background-color: #0062af;
    border-color: #0062af;
    font-weight: bold;
}
.el-badge__content {
    background-color: #0067b8;
}

```