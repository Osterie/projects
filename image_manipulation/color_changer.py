from PIL import Image
 
def convertImage():
    img = Image.open("C:\\Users\\adria\\github_repository\\projects\\image_manipulation\\test.JPG")
    img = img.convert("RGBA")
 
    datas = img.getdata()
 
    newData = []
 
    for item in datas:
        if item[0] == 0 and item[1] == 0 and item[2] == 0:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
 
    img.putdata(newData)
    img.save("C:\\Users\\adria\\github_repository\\projects\\image_manipulation\\test2.PNG", "PNG")
    print("Successful")
 
convertImage()