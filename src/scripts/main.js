/**
 * Created by bikram on 1/12/17.
 */

/**
 * Returns whether a triangle is equilateral/isoceles/scalene, based on
 * numeric side lengths, and returns 'unknown' if any side length is missing
 * or is not numeric  or is numeric but not positive
 * @param sideaLength number representing length of sidea
 * @param sidebLength number representing length of sideb
 * @param sidecLength number representing length of sidec
 */
var getTriangleType = function(sideaLength,sidebLength,sidecLength) {
    var triangleType = '';

    // at least one param is not sent or is a string
    if ((typeof sideaLength === 'undefined' || typeof sideaLength === 'string' )||
        (typeof sidebLength === 'undefined' || typeof sidebLength === 'string' ) ||
        (typeof sidecLength === 'undefined' || typeof sidecLength === 'string')) {
        triangleType = 'unknown';
    } else {
        if ( sideaLength <= 0 || sidebLength <= 0 || sidecLength <= 0) {
            triangleType = 'unknown';
        } else if ( sideaLength === sidebLength && sidebLength === sidecLength) {
            triangleType = 'equilateral';
        } else if (sideaLength === sidebLength ||
            sideaLength === sidecLength ||
            sidebLength === sidecLength) {
            triangleType = 'isoceles';
        } else {
            triangleType = 'scalene';
        }
    }

    return triangleType;
};

var testGetTriangleType = function() {
    console.log((getTriangleType() === 'unknown' ) ?
        'function passed - expected value found when no params are sent' :
        'function failed - expected value not found when no params are sent'
    );
    console.log((getTriangleType(1,null,2) === 'unknown' ) ?
        'function passed - expected value found when at least one param is null/missing' :
        'function failed - expected value not found when at least one param is null/missing'
    );
    console.log((getTriangleType(1,'2',2) === 'unknown' ) ?
        'function passed - expected value found when string params are sent' :
        'function failed - expected value not found when string params are sent'
    );
    console.log((getTriangleType(1,-2,2) === 'unknown' ) ?
        'function passed - expected value found when non positive params are sent' :
        'function failed - expected value not found when non positive params are sent'
    );
    console.log((getTriangleType(2,2,2) === 'equilateral' ) ?
        'function passed - expected value found when equal params are sent' :
        'function failed - expected value not found when equal params are sent'
    );
    console.log((getTriangleType(2,3,2) === 'isoceles' ) ?
        'function passed - expected value found when two equal params are sent' :
        'function failed - expected value not found when two equal params are sent'
    );
    console.log((getTriangleType(2,1,3) === 'scalene' ) ?
        'function passed - expected value found when all unequal params are sent' :
        'function failed - expected value not found when all unequal params are sent'
    );
};

testGetTriangleType();