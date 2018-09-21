# BBVA - Conversión a cuentas de 20 digitos en JS

[![](https://www.bbvacontinental.pe/fbin/mult/logo-bbva-continental.png)](https://www.bbvacontinental.pe/)

Función VBA de Macros de archivo de conversión de BBVA a Javascript (JS), cuando la cuenta bancaria no tenga su DC (Dígitos de Control).

### Items

| Item | Descripción |
| ------ | ------ |
| VBA | Las aplicaciones de Office, como Excel, tienen Visual Basic para Aplicaciones (VBA), un lenguaje de programación que brinda la posibilidad de ampliar dichas aplicaciones. VBA funciona mediante la ejecución de macros , procedimientos paso a paso escritos en Visual Basic. [VBA](https://msdn.microsoft.com/es-es/library/office/ee814737(v=office.14).aspx) |
| Javascript | Es un lenguaje de programación que te permite crear contenido nuevo y dinámico, controlar archivos de multimedia, crear imágenes animadas y muchas otras cosas más. [Javascript](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Qu%C3%A9_es_JavaScript) |

### Excel

* [Conversión a cuentas de 20 dígitos](https://www.bbvacontinental.pe/fbin/mult/convertidor_de_cuenta_18_a_20_digitos_tcm1105-611881.xlsx) - VBA

![](https://i.imgur.com/sKhh6RS.png)

### Visualizar Script VBA

Abrir archivo y presionar ALT + F11

```vba
Function cuenta18(cta18 As String) As String
    Dim cad1, cad2 As String
    Dim msg As String
            
    cad1 = Format(Mid(cta18, 5, 1) * 1)
    cad1 = cad1 + Format(Mid(cta18, 6, 1) * 2)
    cad1 = cad1 + Format(Mid(cta18, 7, 1) * 1)
    cad1 = cad1 + Format(Mid(cta18, 8, 1) * 2)
        
    valor = 3          ' ---> El 0011 es constante
    For i = 1 To Len(cad1)
      valor = valor + Val(Mid(cad1, i, 1))
    Next i
    
    dig1 = (Int(valor / 10) + 1) * 10 - valor
    dig1 = Right(dig1, 1)
                
    'Multiplica por el 2-1
    cad2 = ""
    For i = 9 To 17 Step 2
      cad2 = cad2 + Format(Mid(cta18, i, 1) * 1)
      cad2 = cad2 + Format(Mid(cta18, i + 1, 1) * 2)
    Next i
    
    'Suma valores obtenidos
    valor = 0
    For i = 1 To Len(cad2)
      valor = valor + Val(Mid(cad2, i, 1))
    Next i
    
    'Resta de la decena siguiente
    dig2 = (Int(valor / 10) + 1) * 10 - valor
    dig2 = Right(dig2, 1)
        
    dc = Format(dig1) + Format(dig2)
    cuenta18 = Mid(cta18, 1, 8) + dc + Mid(cta18, 9, 18)
End Function
```

License
----

MIT
