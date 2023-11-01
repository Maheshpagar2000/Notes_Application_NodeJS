// const firstName = require('./utils.js')
// console.log(firstName)
// const validator= require('validator')
// console.log(validator.isEmail('mahesh@gmail.com'))
 
// console.log(process.argv[2])

//console.log(chalk.red.inverse.bold('Error!'))

//console.log(getnotes)
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//const command = process.argv[2]
//console.log(process.argv)
yargs.version('1.1.0')

//Addding comment 
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Removing Comment
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'Remove Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//listing comment
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler(){
        notes.listNotes()
    }
})

//reading comment
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)
