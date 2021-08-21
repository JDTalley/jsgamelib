export default class Game {
    constructor(GameCanvas) {
        // Canvas Items
        this.canvas = GameCanvas
        this.gameWidth = canvas.width
        this.gameHeight = canvas.height

        // Timing Variables
        this.deltaTime = .01
        this.accumulator = 0
        this.lastTick = performance.now()

        // Capture input
        this.keys = []

        // If keyUp, input is not active
        window.onkeyup = (e) => {
            keys[e.code] = false
        }

        // If keyDown, input is active
        window.onkeydown = (e) => {
            keys[e.code] = true
            // PreventDefault to prevent page scrolling, etc.
            e.preventDefault()
        }


        // Game Logic Variables
        this.paused = false
    }

    // startGame() initailizes game variables and starts the Game Loop
    startGame() {
        queueTick()
    }

    // queueTick() queues the next tick
    queueTick() {
        window.requestAnimationFrame(gameTick)
    }

    // gameTick() completes all actions for each tick and queues next tick 
    gameTick() {
        if (!paused) {
            // Update timing variables
            updateTiming()

            // Update Game Variables
            updateGame()

            // Checks for User input and makes changes
            checkInput()

            // Based on timing complete physics calculations
            while (this.accumulator >= this.deltaTime) {
                updatePhysics()
                this.accumulator -= this.deltaTime
            }

            // Render graphics on screen
            renderGraphics()
        }

        // Queue next tick
        queueTick()
    }

    // updateTiming() updates timing variables to track tick calc times
    updateTiming() {
        // Calculate time since last tick
        let currentTime = performance.now()
        let elapsedTime = currentTime - this.lastTick

        // Make this tick the last tick
        this.lastTick = currentTime

        // Track accumulated time for physics calculations
        this.accumulator += elapsedTime
    }

    // updateGame() updates Game Variables
    updateGame() {
        // Can add score, lives, etc.
        // By default there are no items here
    }

    // checkInput() checks for inputs 
    checkInput() {
        // Can add logic based on input here
        // By default there are no items here
    }

    // updatePhysics() handles physics logic
    updatePhysics() {
        // Can add physics logic here
        // By default there are no items here
    }

    // renderGraphics() renders scene to canvas
    renderGraphics() {
        // Can add rendering here
        // By default there are no items here
    }
}