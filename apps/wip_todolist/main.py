

import sys
from PyQt5.QtWidgets import QApplication
from PyQt5.QtQml import QQmlApplicationEngine
from PyQt5.QtCore import QObject, pyqtSlot, QVariant
import pickle

import os






new_items = []
remove = []




class MainApp(QObject):

    def __init__(self, context, parent=None):
        super(MainApp, self).__init__(parent)
        self.win = parent
        self.ctx = context


    @pyqtSlot(QVariant)
    def foo(self, aword):
            #print('from qml: %s was received' % (aword))
            if aword != '':
                new_items.append(aword)


            # if os.path.getsize("test") > 0:      
            #     with open("test", "rb") as fp:
            #         b = pickle.load(fp)



            #         # a = self.win.findChild(QObject, 'pyLbl1')
            #         # a.setProperty("text", len(b))  



            #         c = self.win.findChild(QObject, 'pyLbl2')
            #         c.setProperty("text", str(b))


    @pyqtSlot(QVariant)
    def remover(self,index):
        

        remove.append(index)



def save(): 

    
    with open("test", "rb") as fp:   # Unpickling
        try:
            old_items = pickle.load(fp)


        except:
            old_items = []
            pass



    for i in range(0, len(new_items)):

        old_items.append(new_items[i])

    if len(old_items) > 0:

        for i in range(0, len(remove)):


            del old_items[remove[i]]



    with open("test", "wb") as fp:   #Pickling
        pickle.dump(old_items, fp)



class Backend():

    def __init__(self):
        pass

    def assignments(self):
        pass

    def tests(self):
        pass

    def sender(self):
        pass


if __name__ == "__main__":
    app = QApplication(sys.argv)
    engine = QQmlApplicationEngine()
    ctx = engine.rootContext()
    engine.load('C:\\Users\\adria\\OneDrive\\Desktop\\Projects\\Apps\\Deleteme3\\test.qml')
    win = engine.rootObjects()[0]
    py_mainapp = MainApp(ctx, win)
    ctx.setContextProperty("py_mainapp", py_mainapp)
    win.show()
    app.aboutToQuit.connect(save)
    sys.exit(app.exec_())



