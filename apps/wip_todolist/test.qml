
import QtQuick.Controls 1.4



import QtQuick.Controls 2.2
import QtQuick 2.12
import QtQuick.Controls 2.12
import QtQuick.Controls.Material 2.12
import QtQuick.Layouts 1.12

import QtQuick.Window 2.2


import QtQuick 2.6




Window {

 id: main
    visible: true
    height: 600
    width:  700 //height/(1.777) + 1

    //maximumHeight: main.height
    //maximumWidth: main.width

    //minimumHeight: main.height
    //minimumWidth: main.width

    x:Screen.desktopAvailableWidth - width 
    //screen.desktopAvailableWidth - width 
    y: 0        //screen.desktopAvailableHeight - height
    title: "HelloApp"
    color: "#00000000"
    FontLoader{id: minecraft; source: ("\\UI\\Visual\\Monocraft.otf")}
    
    flags: Qt.FramelessWindowHint | Qt.WA_TranslucentBackground
    //flags: Qt.FramelessWindowHint | Qt.Window


    // Rectangle {
    //     z:5
    //     width: 100; height: 100; color: "green"

    // SequentialAnimation on x {
    //     loops: 5
    //     PropertyAnimation { to: 50; duration: 10000 }
    //     PropertyAnimation { to: 0; duration: 10000 }
    // }


        // PropertyAnimation on x { to: 400; duration: 10000; loops: 2 }
        // PropertyAnimation on y { to: 400; duration: 10000; loops:2 }
        // PropertyAnimation { properties: "y";
        //             easing.type: Easing.InOutElastic;
        //             easing.amplitude: 2.0;
        //             easing.period: 1.5 }

    //     RotationAnimation on rotation {
    //         loops: Animation.Infinite
    //         from: 0
    //         to: 360
    //         duration:500
    //     }
        
    // }


    //Main screen, with image
    Rectangle {
        z: 2
        
        //height: 600
        //width:  height/(1.777) + 1
        


        Rectangle{
            
            color: "white"
            x: main.width - width
            y: 0
            height: main.height 
            width:  main.height/(1.777) + 1
    
        }

        //Background and Time
        Image {
            

            x: main.width - width - 10
            y: 10
            height: 600 - 20
            width:  height/(1.777) + 1 - 10
            sourceSize.width: height/(1.777) + 1
            sourceSize.height: width
            source: "./images/image (4).jpg"      //"./images/image (1).jpg"
             
            fillMode: Image.PreserveAspectCrop

            Rectangle {
                anchors.fill: parent
                color: "transparent"
                Text {
                    id: timestamp

                    anchors {
                        bottom: parent.bottom
                        bottomMargin: 12
                        left: parent.left
                        leftMargin: 12

                    }

                    Timer {
                        function currentTime(){
                            var today = new Date();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            return time
                        }

                        interval: 1000; running: true; repeat: true
                        onTriggered: timestamp.text = currentTime()
                    }
                    font.family: minecraft.name
                    text: 'replace me' //Shows time on homescreen
                    font.pixelSize: 40
                    color: "white"
                    }
                }
            }
        }
    


    //TODOlist
    ToDoList{

        x: width-19
        y:0
        id: todolist


        PropertyAnimation { id: todolist_open;
            target: todolist;
            easing.type: Easing.InOutElastic;
            easing.amplitude: 2.0;
            easing.period: 1.5 
            property: "x";
            to: 0;
            duration: 500 }


        PropertyAnimation { id: todolist_close;
            target: todolist;
            property: "x";
            easing.type: Easing.InOutElastic;
            easing.amplitude: 2.0;
            easing.period: 1.5 
            to: width-19;
            duration: 500 }

        

        //PropertyAnimation on x { to: (textMoreButton.text == "TODO" ) ? 0 : width-19; duration: 4000; loops: Animation.Infinite }
        //PropertyAnimation on y { to: 400; duration: 10000; loops:2 }
        visible: true
        
    }

    //TODOlist.revealer
    Rectangle {
        z: 2
        
        visible: true
        id: rectangleMoreButton
        height: 40
        width: 40
        anchors.right: parent.right
        anchors.rightMargin: 298


        color: "#4a4a4a"
        border.color: "#ffffff"
        

        Text {
            id: textMoreButton
            text: "TODO"
            color: "#ffffff"
            font.family: minecraft.name
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.verticalCenter: parent.verticalCenter
        }

        MouseArea {
            anchors.fill: parent
            onClicked: {
                rectangleMoreButton.state == 'more' ? rectangleMoreButton.state = "" : rectangleMoreButton.state = 'more'
            }
        }

        states: [
            State {
                name: "more"
                    onCompleted: {
                    textMoreButton.text = "Return"
                    todolist_open.running = true  
                    

                    

                }
            },
            State {
                name: ""
                onCompleted: {
                    textMoreButton.text = "TODO"
                    todolist_close.running = true
                     
                   
                }
            }
        ]
    }
    

    Rectangle{
        z: 2
        anchors.right: parent.right

        height: 40
        width: 40


        Text {

            text: "X"
            color: "red"
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.verticalCenter: parent.verticalCenter
        }

        
        MouseArea {
            anchors.fill: parent
            onClicked: {
                Qt.quit()
            }
        }
    }
}