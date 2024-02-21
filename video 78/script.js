console.log("hecker")

async function pass() {
    console.log(" Password files Detected...")
}

async function main() {
    console.log("Initializing Hacking...")

    console.log("Reading your files..")

    let data = await pass()

    console.log(data)
}

main()