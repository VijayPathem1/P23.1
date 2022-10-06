function Extension(name){
    const ext=name.split('.').pop()
    return ext
}
const f1=Extension('text.css')
const f2=Extension('git.js')
console.log(f1)
console.log(f2)
