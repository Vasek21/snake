
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Snake {

    export function turnLeft() {
        direction = (direction + 3) % 4
    }

    export function turnRight() {
        direction = (direction + 1) % 4
    }

    export function initSnake(arr: Array<number>) {
        let result = [];
        for (let i = 0; i + 1 < arr.length; i += 2) {
            result.push(game.createSprite(arr[i], arr[i + 1]));
        }
        return result;
    }

}
