// Contiene un objeto con información del navegador que utiliza el cliente Web.
var infoNav = new Object();
infoNav.nombre = navigator.appName;
infoNav.idioma = navigator.language;
infoNav.version = navigator.appVersion;
infoNav.plataforma = navigator.platform;
infoNav.vendedor = navigator.vendor;
infoNav.agente = navigator.userAgent;
infoNav.javaActivo = navigator.javaEnabled();