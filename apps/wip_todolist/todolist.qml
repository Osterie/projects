import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12
import QtQuick.Controls.Material 2.12


import QtQuick.Controls.Styles 1.1
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4

import QtQuick 2.12
import QtQuick.Controls 2.12    


import QtQuick 2.8
import QtQuick.Layouts 1.0
import QtQuick.Controls 2.0
//import QtQuick.Controls 2.1 // Qt >= 5.8.0 with RoundButton
import QtGraphicalEffects 1.0



Image {
    
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }


    width: 373
    height: width* 1.23
    
    source: "./images/book.png"      //"./images/image (1).jpg"
        
    fillMode: Image.PreserveAspectCrop


    FontLoader{id: minecraft; source: ("\\UI\\Visual\\Monocraft.otf")}
    

    Column {
        
        anchors.fill: parent
        spacing: 10

        // Label {
        //     id: lbl1
        //     visible: false
        //     font.family: minecraft.name
        //     objectName: 'pyLbl1'
        //     text: "what the heck"
            
        // }

        Label {
            id: lbl2
            visible: false
            font.family: minecraft.name
            objectName: 'pyLbl2'
            text: "unset"
        }


        Timer {

        function startup(){
                    
            for (let i = 0; i < (lbl2.text.split(",")).length ; i++){
                
                if (lbl2.text.split(",") != '[]'){
                    
                var todoitems = lbl2.text.split(","); 
                
                todoModel.append( { content: (todoitems[i].replace(  /'/g, '').replace( /]/g, '').replace( /\[/g, ''  )).trim() } );
                }
            }
        }

        running: true; repeat: false
        onTriggered: py_mainapp.foo(''),  startup()
        }
    }


  ListModel { id: todoModel }
  

  // show children in a column (one below another)
  // this will show input field and button above
  // and scrolling list below


ColumnLayout {
      

      anchors.fill: parent
      anchors.topMargin: 90
      anchors.leftMargin: 44
      anchors.rightMargin: 20
      
      
      // show children in a row (one next to each other)
    RowLayout {


        Layout.fillWidth: true
        spacing: 15


        // show this above our todoList view 

        z: 1
        TextField {

            
            id: todoInputField
                background: Rectangle { 
                x : 0
                y : 10
                implicitWidth: 200
                implicitHeight: 40
                color: "transparent" 
            }

            x: 20
            font.pointSize: 16
            font.family: minecraft.name
            placeholderText: qsTr("New")
            Layout.fillWidth: true     

            Keys.onPressed: (event)=> {
            if (event.key == 16777220){
                py_mainapp.foo(todoInputField.text)
                todoModel.append({ content: todoInputField.text })
                todoInputField.text = ''        
                }
            }
          }
          RoundButton {
              highlighted: false
              font.family: minecraft.name
              text: "\u2795" // unicode heavy plus sign
              onClicked: {
                
                  // add data to our model
                  py_mainapp.foo(todoInputField.text)
                  todoModel.append({ content: todoInputField.text })
                  todoInputField.text = ''
              }
          }
      }

      ListView {
          id: todoList

          
          // use the model we defined above to render list
          
          model: todoModel
          
          
          Layout.fillWidth: true
          Layout.fillHeight: true

          delegate: ColumnLayout {
              width: todoList.width
              height: 55

              RowLayout {
                
                  Layout.fillWidth: true
                  spacing: 0

                Button{
                    z:3
                    x:0
                    y:-20
                    Layout.preferredWidth: 50
                    Layout.preferredHeight: 50



            

                    Image{
                        z: 1
                        id: creeper
                        width: 50
                        height: 50
                        property string checked: 'un'
                        source: './images/creeper_faces.png'    //'./images/creeper_checkbox_' + checked + 'checked.jpg' 
                    }

                    Image{
                        z: 0
                        id: creeper_back
                        width: 50
                        height: 50
                        source: './images/creeper_back.jpg'
                    }


                    Colorize {
                        id:creeper_color
                        anchors.fill: creeper_back
                        source: creeper_back
                        hue: 0 
                        saturation: 0
                        lightness: 0.5
                    }
            
                    onClicked: { 
                        if (creeper_color.hue == 0){
                            creeper_color.hue = 1.322
                            creeper_color.saturation = 0.724
                            creeper_color.lightness = 0.412



                            //132.2°, 72.4, 41.2
                        }
                        
                        else {
                            creeper_color.hue = 0
                            creeper_color.saturation = 0 //0.72
                            creeper_color.lightness = 0.5
                        }
                    }                
                }

                  TextField {
                    
                      font.pointSize: 16
                      font.family: minecraft.name
                      readOnly: true
                      color: "red"
                      background: Item {}
                      text: model.content
                                            
                      Layout.fillWidth: true
                  }

                  RoundButton {
                    id: eye_of_ender_main

                      palette.button: "transparent"
                      font.family: minecraft.name
                      text: "\u2796" // unicode heavy minus sign


                    SequentialAnimation on x {
                        loops:  Animation.Infinite
                    

                        PropertyAnimation {
                            target:  eye_of_ender_main;
                            property: "y";
                            easing.type: Easing.OutSine;       //InOutSine	;
                            to: 5;
                            duration: 1000 }

                        
                        PropertyAnimation {
                            target:  eye_of_ender_main;
                            property: "y";
                            easing.type: Easing.OutSine;         //InOutSine;
                            to: 0;
                            duration: 1000 }
                    }
                  




                    Image{
                        id:eye
                        z: 1
                        x:-12
                        width: 40
                        height: 40
                        property int eyephase: 1
                        source: './images/gifs/eyeofender/eye' + eyephase + '.png'

                        MouseArea {
                            id: mouseArea
                            anchors.fill: parent
                            anchors.margins: -10
                            hoverEnabled: true         //this line will enable mouseArea.containsMouse

                            onClicked: { blink.running = true }
                            onEntered: hovered_eye.running = true
                        }
                    }

                    background: Rectangle{
                        radius: 50
                        x:-12
                        width: 40
                        height: 40
                        color: 'transparent'
                           
                    }

                    Timer {
                        id: hovered_eye

                        function eye_hovered(){
   
                            if (eye.eyephase == 8) { 
                                
                                eye.eyephase = 1;
                                hovered_eye.running = false
                                } 
                                
                            else {
                                hovered_eye.running = true;
                                eye.eyephase+= 1;
                            }
                        }

                        interval: 40; running: false; repeat: true
                        onTriggered: eye_hovered() 
                    }


                    Timer {

                        id: blink

                        function remove_item() {

                            if (hovered_eye.running == false){

                                if (eye.eyephase == 5) { 
                                    
                                    if(model.content != ''){
                                        
                                        py_mainapp.remover(model.index) //Transmits item removed to backend
                                    }

                                    todoModel.remove(model.index)
                                    
                                    } 
                                    
                                else {

                                    eye.eyephase+= 1
                                }
                            }
                        }

                        interval: 200; running: false; repeat: true
                        onTriggered: remove_item()
                            
                        }
                    }
                }
            }
        }
    }
}

