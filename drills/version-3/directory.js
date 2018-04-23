// Your code here
class File {
    constructor(name, content) {
        this.name = name 
        this.content = content
    }
}
class Directory {
    constructor(name) {
        this.name = name
        this.files = []
        this.listOfFiles = []
    }
    ls() {
        this.listOfFiles.sort((a, b) => {
            if(a < b) return -1
            if(a > b) return 1
            return 0
        })
        return this.listOfFiles
    }
    write(name, content) {
        let file = new File(name, content)
        this.listOfFiles.push(file.name)
        this.files.push(file)
    }
    ls_la(name) {
    if(name == null) return this.files
    if(name !== null) {
        return this.files.filter(current => {
            return current.name == name
            }).map(current => {
            return `${current.name} - ${current.content.length}`
            })
        }
    }
}
module.exports = Directory
