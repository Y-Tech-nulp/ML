Всі методи використовують спеціальні бібліотеки AppInventor-JavaLibrary.
При запуску Android додатку "Magic Lamp" кнопки вмикання/вимикання (Button1, Вutton2) приховані (Button1.Visible(false);  Button2.Visible(false)). 
Натиснувши на позначку Bluetooth (ListPicker1) та вибравши відповідну Bluetooth-адресу, спрацьовує метод підключення 
(ListPicker1.Elements(YailList.makeList(BluetoothClient1.AddressesAndNames())). При цьому позначка зникає  (ListPicker1.Visible(0)), з'являється зелений текст 
"Під'єднано" у верхній частині користувацького інтерфейсу, що реалізується методами Label1.Text("Під'єднано") та Label1.TextColor(COLOR_GREEN). Опісля з'вляється
кнопка вмикання (Button1.Visible(true)), при натисненні на яку вона знову зникає (Button1.Visible(false), передає під'єднаній лампі символ "n"  
(BluetoothClient1.SendText("n")) та з'вляться кнопка вимикання (Button2.Visible(true)). При натисненні на кнопку вимикання, вона зникає (Button2.Visible(false),
з'вляється кнопка вмикання (Button1.Visible(true)), передає під'єднаній лампі символ "f" (BluetoothClient1.SendText("f")). Натиснення на нижні кнопки червоного/
зеленого/жовтого/білого/синього/помаранчевого кольору призводить до зміни кольору освітлення лампи, що регулюється передаванням лампі відповідниз символів "r"/"g"/ 
"y"/"w"/"b"/"o".



