package org.appinventor;
import com.google.appinventor.components.runtime.HandlesEventDispatching;
import com.google.appinventor.components.runtime.EventDispatcher;
import com.google.appinventor.components.runtime.Form;
import com.google.appinventor.components.runtime.Component;
import com.google.appinventor.components.runtime.Label;
import com.google.appinventor.components.runtime.HorizontalArrangement;
import com.google.appinventor.components.runtime.VerticalArrangement;
import com.google.appinventor.components.runtime.Button;
import com.google.appinventor.components.runtime.ListPicker;
import com.google.appinventor.components.runtime.Clock;
import com.google.appinventor.components.runtime.BluetoothClient;
import com.google.appinventor.components.runtime.Sound;
import com.google.appinventor.components.runtime.util.YailList;
class Screen1 extends Form implements HandlesEventDispatching {
  private Label Label1;
  private HorizontalArrangement HorizontalArrangement1;
  private VerticalArrangement VerticalArrangement1;
  private Button Button2;
  private ListPicker ListPicker1;
  private Button Button1;
  private VerticalArrangement VerticalArrangement2;
  private HorizontalArrangement HorizontalArrangement2;
  private Button Button3;
  private Button Button4;
  private Button Button5;
  private Button Button6;
  private Button Button7;
  private Button Button8;
  private Clock Clock1;
  private BluetoothClient BluetoothClient1;
  private Sound Sound1;
  protected void $define() {
    this.AppName("Magic Lamp");
    this.BackgroundColor(0x00FFFFFF);
    this.BackgroundImage("giphy.gif");
    this.Icon("magiclamplogo.png");
    Label1 = new Label(this);
    Label1.Width(LENGTH_FILL_PARENT);
    HorizontalArrangement1 = new HorizontalArrangement(this);
    HorizontalArrangement1.AlignHorizontal(3);
    HorizontalArrangement1.BackgroundColor(0x00FFFFFF);
    HorizontalArrangement1.Height(LENGTH_FILL_PARENT);
    HorizontalArrangement1.Width(LENGTH_FILL_PARENT);
    VerticalArrangement1 = new VerticalArrangement(this);
    VerticalArrangement1.AlignHorizontal(3);
    VerticalArrangement1.AlignVertical(2);
    VerticalArrangement1.BackgroundColor(0x00FFFFFF);
    VerticalArrangement1.Height(LENGTH_FILL_PARENT);
    VerticalArrangement1.Width(LENGTH_FILL_PARENT);
    Button2 = new Button(VerticalArrangement1);
    Button2.Height(100);
    Button2.Width(100);
    Button2.Image("MLoff.png");
    Button2.Visible(false);
    ListPicker1 = new ListPicker(VerticalArrangement1);
    ListPicker1.Height(100);
    ListPicker1.Width(100);
    ListPicker1.Image("MLbluet.png");
    Button1 = new Button(VerticalArrangement1);
    Button1.Height(100);
    Button1.Width(100);
    Button1.Image("MLon.png");
    Button1.Visible(false);
    VerticalArrangement2 = new VerticalArrangement(this);
    VerticalArrangement2.AlignHorizontal(3);
    VerticalArrangement2.AlignVertical(2);
    VerticalArrangement2.BackgroundColor(0x00FFFFFF);
    VerticalArrangement2.Height(100);
    VerticalArrangement2.Width(LENGTH_FILL_PARENT);
    HorizontalArrangement2 = new HorizontalArrangement(this);
    HorizontalArrangement2.AlignHorizontal(3);
    HorizontalArrangement2.AlignVertical(2);
    HorizontalArrangement2.BackgroundColor(0x00FFFFFF);
    HorizontalArrangement2.Width(LENGTH_FILL_PARENT);
    Button3 = new Button(HorizontalArrangement2);
    Button3.BackgroundColor(0xFFFF0000);
    Button3.Height(40);
    Button3.Width(40);
    Button3.Image("MLred.png");
    Button4 = new Button(HorizontalArrangement2);
    Button4.BackgroundColor(0xFF00FF00);
    Button4.Height(40);
    Button4.Width(40);
    Button4.Image("MLgreen.png");
    Button5 = new Button(HorizontalArrangement2);
    Button5.BackgroundColor(0xFFFFFF00);
    Button5.Height(40);
    Button5.Width(40);
    Button5.Image("MLyellow.png");
    Button6 = new Button(HorizontalArrangement2);
    Button6.BackgroundColor(0xFFFFFFFF);
    Button6.Height(40);
    Button6.Width(40);
    Button6.Image("MLwhite.png");
    Button7 = new Button(HorizontalArrangement2);
    Button7.BackgroundColor(0xFF0000FF);
    Button7.Height(40);
    Button7.Width(40);
    Button7.Image("MLblue.png");
    Button8 = new Button(HorizontalArrangement2);
    Button8.BackgroundColor(0x00FFFFFF);
    Button8.Height(40);
    Button8.Width(40);
    Button8.Image("MLorange.png");
    Clock1 = new Clock(this);
    BluetoothClient1 = new BluetoothClient(this);
    Sound1 = new Sound(this);
    Sound1.Source("jg-032316-sfx-light-switch.mp3");
    EventDispatcher.registerEventForDelegation(this, "BeforePickingEvent", "BeforePicking" );
    EventDispatcher.registerEventForDelegation(this, "AfterPickingEvent", "AfterPicking" );
    EventDispatcher.registerEventForDelegation(this, "TimerEvent", "Timer" );
    EventDispatcher.registerEventForDelegation(this, "ClickEvent", "Click" );
  }
  public boolean dispatchEvent(Component component, String componentName, String eventName, Object[] params){
    if( component.equals(ListPicker1) && eventName.equals("BeforePicking") ){
      ListPicker1BeforePicking();
      return true;
    }
    if( component.equals(ListPicker1) && eventName.equals("AfterPicking") ){
      ListPicker1AfterPicking();
      return true;
    }
    if( component.equals(Clock1) && eventName.equals("Timer") ){
      Clock1Timer();
      return true;
    }
    if( component.equals(Button1) && eventName.equals("Click") ){
      Button1Click();
      return true;
    }
    if( component.equals(Button2) && eventName.equals("Click") ){
      Button2Click();
      return true;
    }
    if( component.equals(Button3) && eventName.equals("Click") ){
      Button3Click();
      return true;
    }
    if( component.equals(Button4) && eventName.equals("Click") ){
      Button4Click();
      return true;
    }
    if( component.equals(Button5) && eventName.equals("Click") ){
      Button5Click();
      return true;
    }
    if( component.equals(Button6) && eventName.equals("Click") ){
      Button6Click();
      return true;
    }
    if( component.equals(Button7) && eventName.equals("Click") ){
      Button7Click();
      return true;
    }
    if( component.equals(Button8) && eventName.equals("Click") ){
      Button8Click();
      return true;
    }
    return false;
  }
  public void ListPicker1BeforePicking(){
    ListPicker1.Elements(YailList.makeList(BluetoothClient1.AddressesAndNames()));
  }
  public void ListPicker1AfterPicking(){
    if(BluetoothClient1.Connect(ListPicker1.Selection())){
      ListPicker1.Elements(YailList.makeList(BluetoothClient1.AddressesAndNames()));
      if(BluetoothClient1.IsConnected()){
        ListPicker1.Visible(0);
        Button1.Visible(true);
        false
      }
    }
  }
  public void Clock1Timer(){
    if(BluetoothClient1.IsConnected()){
      Label1.Text("Під'єднано");
      Label1.TextColor(COLOR_GREEN);
    }
    if(!(BluetoothClient1.IsConnected())){
      Label1.Text(0);
      Label1.TextColor(COLOR_GREEN);
      ListPicker1.Visible(0);
      Button1.Visible(0);
      Button2.Visible(false);
      false
      true
      "Нема з'єднання"
    }
  }
  public void Button1Click(){
    BluetoothClient1.SendText("n");
  }
  public void Button2Click(){
    BluetoothClient1.SendText("f");
  }
  public void Button3Click(){
    BluetoothClient1.SendText("r");
  }
  public void Button4Click(){
    BluetoothClient1.SendText("g");
  }
  public void Button5Click(){
    BluetoothClient1.SendText("y");
  }
  public void Button6Click(){
    BluetoothClient1.SendText("w");
  }
  public void Button7Click(){
    BluetoothClient1.SendText("b");
  }
  public void Button8Click(){
    BluetoothClient1.SendText("o");
  }
}
