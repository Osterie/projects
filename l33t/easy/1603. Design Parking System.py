class ParkingSystem(object):

    def __init__(self, big, medium, small):
        """
        :type big: int
        :type medium: int
        :type small: int
        """

        self.cars = [big, medium, small]
        

    def addCar(self, carType):
        """
        :type carType: int
        :rtype: bool
        """
        self.cars[carType-1] -= 1
        if self.cars[carType-1] <= -1:
            return False

        return True 

        


# # Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(1, 1, 0)
# param_1 = obj.addCar(3)#(small)