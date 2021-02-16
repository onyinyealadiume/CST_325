/*
 * An object type representing an implicit sphere.
 *
 * @param center A Vector3 object representing the position of the center of the sphere
 * @param radius A Number representing the radius of the sphere.
 */

var Sphere = function(center, radius) {
    // Sanity checks (your modification should be below this where indicated)
    if (!(this instanceof Sphere)) {
        console.error("Sphere constructor must be called with the new operator");
    }

    this.center = center;
    this.radius = radius;

    // todo - make sure this.center and this.radius are replaced with default values if and only if they
    // are invalid or undefined (i.e. center should be of type Vector3 & radius should be a Number)
    // - the default center should be the zero vector
    // - the default radius should be 1
    // YOUR CODE HERE
    if (this.center === undefined) {
        this.center = new Vector3(0, 0, 0)
    }
    if (this.radius === undefined) {
        this.radius = 1;
    }

    // Sanity checks (your modification should be above this)
    if (!(this.center instanceof Vector3)) {
        console.error("The sphere center must be a Vector3");
    }

    if ((typeof(this.radius) != 'number')) {
        console.error("The radius must be a Number");
    }


};

Sphere.prototype = {

        //----------------------------------------------------------------------------- 
        raycast: function(r1) {


            // todo - determine whether the ray intersects this sphere and if so, where

            // Recommended steps
            // ------------------
            // 0. (optional) watch the video showing the complete implementation of plane.js
            //    You may find it useful to see a different piece of geometry coded.

            // 1. review slides/book math

            // 2. identity the vectors needed to solve for the coefficients in the quadratic equation
            var x, y, z, t0, t1;
            x = r1.direction.dot(r1.direction);
            console.log(" print x ", x);

            y = (r1.direction.clone().multiplyScalar(2).dot(r1.origin.clone().subtract(this.center))); //* r1.direction.multiplyScalar(2)));
            console.log(" print y ", y);

            var temp = new Vector3;
            temp = r1.origin.subtract(this.center);

            z = temp.dot(temp) - this.radius ** 2; // fix raduis ^2 later 
            console.log(" print z ", z);

            // 3. calculate the discriminant
            var discr = (y * y) - (4 * x * z);
            console.log(" print discr ", discr);

            // 4. use the discriminant to determine if further computation is necessary 
            //    if (determinant...) { ... } else { ... }
            if (discr < 0) { // ray does not intersect. return false

                console.log(" print discr less then 0", discr);
                
                return {
                    hit: false,
                    point: null,
                };
             
            } else if (discr == 0) { //when discr = 0 one root which can be computed.The ray intersects the sphere in one place only. /

                t0 = t1;
                t1 = -0.5 * y / x;

                return { hit: true };
            } else if (discr > 0) { // there are two roots whtich can be computed
                console.log(" print discr greater then 0", discr);

                t0 = (-y + Math.sqrt(discr)) / (2 * x);
                console.log(" print t0", t0);

                t1 = (-y - Math.sqrt(discr)) / (2 * x);
                console.log(" print t1", t1);

                return {
                    hit: true,
                }
            }


            // 5. return the following object literal "result" based on whether the intersection
            //    is valid (i.e. the intersection is in front of the ray and the ray is not inside
            //    the sphere)
            //    case 1: no VALID intersections
            //      var result = { hit: false, point: null }
            //    case 2: 1 or more intersections
            //      var result = {
            //        hit: true,
            //        point: 'a Vector3 containing the closest VALID intersection',
            //        normal: 'a vector3 containing a unit length normal at the intersection point',
            //        distance: 'a scalar containing the intersection distance from the ray origin'
            //      }

            // An object created from a literal that we will return as our result
            // Replace the null values in the properties below with the right values
            var result = {
                hit: true, // should be of type Boolean
                point: null, // r1.origin.clone().add(ray.direction.clone().multiplyScalar(alpha)),
                normal: this.normal, // should be of type Vector3
                distance: null, //alpha, // should be of type Number (scalar)
            };
            console.log("result", result);
            return result;
        }

    }
    // EOF 00100001-1