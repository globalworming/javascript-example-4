const RunTest =  {
    test1() {
        setTimeout(() => {
            try {
                let pineapples = document.getElementsByClassName("pineapple").length
                if (!pineapples) {
                    document.getElementById("displayOnSuccess").hidden = false
                } else {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected no pineapples, found ${pineapples}`
                }
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },

    delayedShow() {
        setTimeout(() => {
            document.getElementById("displayOnSuccess").hidden = false
        }, 1000)
    }
}