// Your code here
class Directory {
    constructor(name) {
        this.name = name
        this.files = {}
    }
    
    write(filename, data) {
        if(this.files[filename]){
            this.files[filename].data = data
        } else {
        this.files[filename] = {filename, data}
        }
    }

    ls() {
        return Object.keys(this.files).sort()
    }

    ls_la() {
        return Object.keys(this.files).reverse()
        .map(filename => {
            return `${filename} - ${this.files[filename].data.length}`
        })
    }

    cat(filename) {
        return this.files[filename].data
    }

    mv(fromFile, toFile) {
        this.files[toFile] = this.files[fromFile]
        delete this.files[fromFile]
    }

    cp(fromFile, toFile) {
        this.files[toFile] = {...this.files[fromFile]}
    }

    ln_s(fromFile, toFile) {
        this.files[toFile] = this.files[fromFile]
    }
}
module.exports = Directory
