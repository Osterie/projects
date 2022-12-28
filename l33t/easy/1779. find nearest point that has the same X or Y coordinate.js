/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {

    manhattan_distance = 10000;
    answer = -1;

    for (let i = 0; i < points.length; i++) {

        if (points[i][0] == x || points[i][1] == y)
        {
            if (Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]) < manhattan_distance) {

                manhattan_distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
                answer = i
            }   
        }
    }
    return answer    
};

// nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])