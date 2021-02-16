/*
 * An "object" representing a 3d vector to make operations simple and concise.
 *
 * Similar to how we work with plain numbers, we will work with vectors as
 * an entity unto itself.  Note the syntax below: var Vector3 = function...
 * This is different than you might be used to in most programming languages.
 * Here, the function is meant to be instantiated rather than called and the
 * instantiation process IS similar to other object oriented languages => new Vector3()
 */

class Vector3 {
    constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;

            // Sanity check to prevent accidentally using this as a normal function call
            if (!(this instanceof Vector3)) {
                console.error("Vector3 constructor must be called with the 'new' operator");
            }

            // Make sure to set a default value in case x, y, or z is not passed in
            if (!Number.isFinite(this.x)) {
                this.x = 0;
            }

            if (!Number.isFinite(this.y)) {
                this.y = 0;
            }

            if (!Number.isFinite(this.z)) {
                this.z = 0;
            }
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    set(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    clone() {
            return new Vector3(this.x, this.y, this.z);
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    copy(other) {
            this.x = other.x;
            this.y = other.y;
            this.z = other.z;
            return this;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    negate() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    add(v) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
            return this;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    subtract(v) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
            return this;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    multiplyScalar(scalar) {
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
            return this;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    lengthSqr() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    normalize() {
            this.multiplyScalar(1 / this.length());
            return this;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    dot(other) {
            return this.x * other.x + this.y * other.y + this.z * other.z;
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    fromTo(fromPoint, toPoint) {
            return toPoint.clone().subtract(fromPoint);
        }
        // The following code is shared for all Vector3 objects
        //----------------------------------------------------------------------------- 
    project(vectorToProject, otherVector) {
        var other01 = otherVector.clone().normalize();
        var projectionLength = vectorToProject.dot(other01);
        return other01.multiplyScalar(projectionLength);
    }
}


// EOF 00100001-1