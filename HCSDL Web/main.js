
//database
/*
Id, Name, Price, Number, Image Name
*/
//Input variable
var size = 14;
var number_every_page = 4;

//-------------------------
var dtb = [
    [0, 'Bún chả', 35, 'bun_cha.jpg', 0],
    [1, 'Cơm sườn', 30, 'com_suon.jpg', 0],
    [2, 'Phở', 50, 'pho.jpg', 0],
    [3, 'Mì hoành thánh', 40, 'mi_hoanh_thanh.jpg', 0],
    [4, 'Mì ý', 55, 'mi_y.jpeg', 0],
    [5, 'Bò bít tết', 25, 'bo_bit_tet.jpg', 0],
    [6, 'Cơm chiên gà xối mỡ', 30, 'com_chien_ga_xoi_mo.webp', 0],
    [7, 'Bánh canh cua', 25, 'banh_canh_cua.jpg', 0],
    [8, 'Cháo lòng', 15, 'chao_long.jpg', 0],
    [9, 'Bánh mì thịt', 15, 'banh_mi_thit.webp', 0],
    [10, 'Bánh tráng trộn', 10, 'banh_trang_tron.jpg', 0],
    [11, 'Hamburger', 20, 'hamburger.jpg', 0],
    [12, 'Mì cay Hàn Quốc', 35, 'mi_cay_han_quoc.jpg', 0],
    [13, 'Mì xào giòn', 30, 'mi_xao_gion.jpg', 0],
];

var searched = [true, true, true, true, true, true, true, true, true, true, true, true, true, true]

for(let i = 0; i < size; i++)
  {
    document.getElementById('block_' + i.toString()).style.display = 'block';
    document.getElementById('image_' + i.toString()).src='../images/' + dtb[i][3];
    document.getElementById('name_' + i.toString()).innerHTML = dtb[i][1];
    document.getElementById('price_' + i.toString()).innerHTML = dtb[i][2].toString() + '.000đ';
  }
  for(let i = 0; i < size; i++)
  {
    document.getElementById('_image_' + i.toString()).src='../images/' + dtb[i][3];
    document.getElementById('_name_' + i.toString()).innerHTML = dtb[i][1];
    document.getElementById('_price_' + i.toString()).innerHTML = dtb[i][2].toString() + '.000đ';
  }

  //

function reduceFood(n)
{
    if(dtb[n][4] > 0)
        dtb[n][4]--;
    document.getElementById('_number_' + n.toString()).innerHTML = dtb[n][4];
    if (dtb[n][4] == 0)
        document.getElementById('_block_' + n.toString()).style.display = 'none';
}

function plusFood(n)
{
    dtb[n][4]++;
    document.getElementById('_number_' + n.toString()).innerHTML = dtb[n][4];
    document.getElementById('_block_' + n.toString()).style.display = 'block';
}

function purchase()
{
    let sum_of_price = 0
    for(let i = 0; i < size; i++)
        sum_of_price += dtb[i][4] * dtb[i][2];
    let str = sum_of_price.toString() + '.000đ\nThank you for your purchase!';
    if (sum_of_price > 999)
    {
        str = (Math.floor(sum_of_price / 1000)).toString() + '.' + (sum_of_price % 1000).toString() 
        +  '.000đ\nThank you for your purchase!';
    }    
    alert(str);
    for(let i = 0; i < size; i++)
    {
        dtb[i][4] = 0;
        document.getElementById('_block_' + i.toString()).style.display = 'none';
    }
}
var current_page = 1;
function search()
{
    var val = document.getElementById('input').value
    var tmp;
    for (let i = 0; i < size; i++)
        searched[i] = true;
    for (let i = 0; i < size; i++)
    {
        tmp = dtb[i][1].search(val);
        if (tmp == -1)
            searched[i] = false;     
    }
    current_page = 1;
    load_page(1);
}


var number_of_page = Math.ceil(size/number_every_page);

load_page(current_page);

function load_page(p_number){
    if(p_number > number_of_page || p_number <= 0) return;
    for (let i = 1; i <= 10; i++)
    {
        document.getElementById('b' + i.toString()).style.display = 'inline';
    }
    for(let i = 0; i < size; i++)
    {
        document.getElementById('block_' + i.toString()).style.display = 'none';
    }
    let count = 0;
    let arr = []
    for(let i = 0; i < size; i++)
    {
        if(searched[i]) 
        {
            count++;
            arr.push(i);
        }
    }
    number_of_page = Math.ceil(count/number_every_page);
    if(number_of_page == 0) number_of_page = 1;
    for(let i = number_every_page * (p_number - 1); i < number_every_page * p_number && i < arr.length; i++)
    {
        document.getElementById('block_' + arr[i].toString()).style.display = 'block';
    }


    for (let i = number_of_page + 1; i <= 10; i++)
    {
        document.getElementById('b' + i.toString()).style.display = 'none'
    }
    for(let i = 1; i <= number_of_page; i++)
    {
        document.getElementById('b' + i.toString()).className = 'w3-button';
    }
    current_page = p_number;
    document.getElementById('b' + current_page.toString()).className = 'w3-button w3-red';
}

function get_curr_page()
{return current_page;}
