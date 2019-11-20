const posts = [
    { title: 'test', age: 23 },
    { title: 'test1', age: 78 },
    { title: 'test2', age: 34 }
]

function drawPosts() {
    setTimeout(() => {
        const div = document.querySelector('.posts');
        div.innerHTML = posts.map((post) =>
            `<li>${post.title}</li>`
        ).join('');
    }, 2000)

}

function addMore(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.push(post);
            resolve();
            reject();
        }, 1000)
    })

}


//drawPosts();
//addMore({title:'test4', age:89}, drawPosts);

addMore({ title: 'test4', age: 89 }).then(drawPosts);


const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log(this);
        res(posts);
        rej();

    }, 5000)


})

p1.then((data) => console.log(data))
    .then((data) => 'we')
    .then((data) => console.log(data))
    .then(() => Promise.resolve('are'))
    .then((data) => console.log(data))
    .then((data) => console.log(data));


let p2 = Promise.resolve('10');
let p3 = Promise.all([p1, p2]);

