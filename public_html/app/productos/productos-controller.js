/*$(document).ready(function(){

    $('#lproductos').DataTable({
        "ajax": {url:"http://tiendaweb.com/api/productos", dataSrc:""},
        "dataSrc": "",
        "columns": [
            { "data": "o.id" },
            { "data": "o.codigo" },
            { "data": "o.nombre" },
            { "data": "o.categoria" },
            { "data": "o.precio" },
            { "data": "o.created_at" },
            { "data": "o.updated_at" }
            ]
        
        
        {
            type:"get",
            {url: 'http://tiendaweb.com/api/productos',dataSrc:""},
            dataSrc:"",
            cache:"true",
            dataType:"json"
            
        },
        "columns":[
            {
        		"targets": 0,
                "render": function ( data, type, row ) {
                    return row.created_at;
                }                
            },
            { data: 'codigo' },
            { data: 'nombre' },
            {
        		"targets": 3,
                "render": function ( data, type, row ) {
                	

                	if(row.categoria)
                	{

                		return row.categoria.nombre;
                	}
                	else
                	{
                		return "";
                	}
                    
                }                
            },
            { data: 'precio' },
            {
        		"targets": 5,
                "render": function ( data, type, row ) {
                	
                	return "<a href='#'>Editar</a> | <a href='#'>Eliminar</a>";
                    
                }                
            }
        ]     
    })
});*/

$(document).ready (function() {
    $.ajax({
        url: "http://tiendaweb.com/api/productos",
        success : function(data) {
            var o = JSON.parse(data);//A la variable le asigno el json decodificado
            $('#lproductos').dataTable( {
                data : o,
                columns: [
                    { "data": "o.id" },
                    { "data": "o.codigo" },
                    { "data": "o.nombre" },
                    { "data": "o.categoria" },
                    { "data": "o.precio" },
                    { "data": "o.created_at" },
                    { "data": "o.updated_at" }            
                ],
            });
        }       
    });
});