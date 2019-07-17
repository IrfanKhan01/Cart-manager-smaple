

let list = [
    {
        id: 001,
        name: 'Irfan',
        counter: 3
    },
    {
        id: 002,
        name: 'Irfan',
        counter: 2
    },
    {
        id: 003,
        name: 'Irfan',
        counter: 4
    },
    {
        id: 004,
        name: 'Irfan',
        counter: 5
    },
    {
        id: 005,
        name: 'Irfan',
        counter: 1
    }
]

let totalPrice = 50;

inc = () => {
  let newlist =  list.map((item) => {
        if (item.id == 004) {

            totalPrice = totalPrice - (item.counter * 5)

            item.counter++;
            totalPrice += item.counter * 5;
            return item;
        } else {
            return item;
        }
        
    })

   let arr = newlist.filter(item => item.counter != 0);
   console.log(arr)
   console.log(totalPrice)
}

dec = () => {
    let newlist =  list.map((item) => {
        if (item.id == 004) {
            if (item.counter >= 1) {
                item.counter--
            } else {
                return;
            }

            totalPrice = totalPrice - 5 // item price
            return item;
        } else {
            return item;
        }
        
    })
    let arr = newlist.filter(item => item.counter != 0);
    console.log(arr);
    console.log(totalPrice)

}