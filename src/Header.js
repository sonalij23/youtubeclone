import React, {useState} from 'react';
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";


function Header() {
    const[inputSearch, setInputSearch] = useState('')

    return (
        <div className="header">
         <div className ="header__left">
            <MenuIcon/>
            <Link to ="/">
            <img className="header__logo" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAABqCAMAAADDRQtiAAAAw1BMVEX/////AAAoKCgAAAAlJSUiIiIUFBQdHR0KCgre3t7s7Ozj4+PIyMj6+voXFxcuLi5kZGTz8/NOTk5dXV2YmJhubm6QkJBDQ0MaGhqpqakPDw//kZF/f3/v7+94eHg6Ojr/4+O0tLTU1NQ2Njb/8fH/5+f/XFz/29uwsLCgoKD/sbH/mpr/ysr/vLz/pKT/Hx9TU1P/ODj/SEj/a2vAwMD/qan/0dH/hob/LS3/enr/QED/Ghr/w8P/cnL/WVn/jIz/TU0OFueNAAAQYUlEQVR4nO2daUPiPBDHa0+ulksBu4AIeICCuquuz6q7+/0/1cPRY/5p0hba2rI6L6GUdH5NMpnMTCRpNzGn04vRaHR19Xz7tljM50/L5fJmJd+orD+4WS6fnubzxdvt89XV1Wh0cTGdmjv+2ZdkKCuSo9vFfHnz8/3y78PLy93rURJ5vXt5efj++8fPm+V8cTv6gp2LXLzN//z4/ZAMZQzYvy7fbxbPX4g/SC7m/71kjDQoP5ZXeT/3vy+L7x/O1ZGHed7Pno8MZqdEZpn9z9vH91gid4vMHqzAUlZ0IkpG85P5I0+ya7n8hDNvWZGJZMR2lLXlFENeR4LGVUAGkVc0U1dPZQfZ5b4fwXaUN9etjPit61qGL9YZT0XkAkNJfd4yJz0jrii73PgD2F7kDdWVKbd5xzpRgGoHe8a1TS9QymnrxzzT5JiiFo1trlYUlQdu88YlqgH7MXDB0KDanaSuH/NMjctWLu1y4+zZ/pc3Ul/+8Npn1qlqe53ABTL93himrqDDZXuVN1AqI14LT2i/1Frs1xXQEKdfJ5XDZfs3b55ULnktPKfzqWyxKqjBmF1K30w+WLaF6rZHRxecJlYQ3pj5utMj32r3aSvogNkWaLZdyzdeG1vUTtVPmW/b9FvrOG0FHS5b8y5vmihcUxl6JmssmRYoiO3VaejoQNkWZm3rCm+NCzMqu8hBBe2k25hyqGzf8mbJyhuvlagDdDteU9eGcZKyftZiTjSVCtKEr7Qi+S6WebNkhTvhNuiUWqrBd+C5sM9T1s9azPsuCMBVz+C7nTwnGbN9z5slK794rTylfdNC7wWo2trJV7+fVGhjgmb7DpIx24e8WQaEqwS6wtXa9CvQtNZNWT08qSLbWvQvRJIx2wJs7jEy4jWTuh3VOlUC2Fkch2T6cihsp3mTDMotr519OqnCTs8xXQJlsQIKyKGwLZhXai03vHY+0t5pX5Nv7omZpcofEbxxKGxv8yYZlP947RzQ3mn0yTcGGa0zWQEF5FDYFm4JdHT0l9tQ6J7EYgIrS7/m/jZlORS2P/MmyRFuQ2FaNfy9HtgjUqrpaocvh8K2cMvbIwHbMVUDWVP2ias5g5ALnhwK2195g+TIiNtSOq+SrSC6RfQhK6DDYZsAwWVqMBnhLoLAtehvBZlKpJrN5qCZ6n79R7BtVquxYnFXDzdoCt6JBAgyy0TgpxjQiVWtu5/SoVo1WG1Uzvvtbl3W1PpZ6+Q0rbVv5mzH/a5s2T252wlrslmbNboTWVXlSbfdPw84W5O4LqSsrOwlX6N0hau4FKmjGX2RknnaUuyeu4OjGboy6QS9zeP7NpF7f7BvtkHIskvIttKCn5AZYghfNNyPuWxrXWXV6vW7qvWUe1FAbnmoKZbhPV3PVlpMzEIS18Xm3cgiaoO7wJWkicpRKA2Tg4AM81jR2ahitad0AsFWikak5EdtNDWDfGGR90bMFu5lkcV2q0e+MOQQts0ThTZbU9gok20TGorB7ilrtg6bYElcF87bkX7y3w8+Wxp8Ybm5A3QTiLoiy2e2zBN9wnQEDKQjETlNiIzVGv5PQtjSL6gjBYKC/BklyLZcpyEmm085u5bnJUPmiKrQkJRFAgTePdLebuDGOiIFV28DOgmTbJLHkigTQNPHwrvmz7YaGGtWwAKL9mNFFAdik2bOEyDw7/ItNawb+ctn2yQBD+qZGeTtT4k14cOvfqpDzy0U26bMeSUNNCMkaaYEL3LF9pWQhAr5t2mqGZ78zBGMZ1S2VhH1VpW8oPOqHhbfpE2EW4Q5s5Ua3KGW2dwah6BdXew1J4kpBH/4nOIe/6tgvUZtYgck4PZWQC2uijyx6FZDgdjq13wbAXdAzEloYJ7mzUxJ+huj+STDOyP8dD7QhAOB6N9fAZ2HvtgyGl0FYisStUeD/46ZF0BjUJdc2yuJbymg+9T2HQRs6SpoS7JKnlOfcS7b8FIUxqw0CKiisTXsks0OOzTArwlhlqptdLslMK29sKLfabKVRim5IUVsSfDFdlvgkbAtuZ0RtvFXptNxeTDu48tOTM+CsbUb5+PHE6Zr0v3qU4gcqz+u5q9BBxvkKCLJVgFP+2+pZCmI2FKU+hpPxzelVMO9ClJIZMcQOQUtEoSFYqs6ltB5CT+W/Tt1IX3GeUc7dAPUfYYkHmG+/tNwQ/LyvTbqJqrYqJRg9LYPMMLUi3cFE5SEQxaKre1axH30YPhmYpX+wt/36pG2OtluZhK3gwBACm7IkeDW9KXdUCBK9tJu0djsuR7kMXxse4Nykdjann+xiqOyv18NT+fbhBB/v01tSBTlKAKQ3A0prBNHlrNre4i+xF7QOSZi++t+yOnxrZMCsaVZ4/cwsfjNxSQK73LIm9lOQ9mwTeyGfBbdl1S+UC2Yf329WJBm4NesAa341kmB2FJzGDIXyeA7CQ6+jGLcISwrtpJ0kwlbWvlCGVATwoOC+iWKh7QT3/dcILYK2X5+hEHZMyaoxUHNZxjDtw+RHVvpIoFbhB94sRYy4K7mIGIfeX45ZCVc7JT4H+e9VyDxv/GmFlESBRiQ2zchQ7ZJ3JBitiT4Qj8lU6iquVdA96RdAd2wJRd6QdmayNa168+D/XPbWEiK2rQ1UWJ1BNqVzPecdsVsifaMPnl+P4AKVw89k/dTmVieBWUrQTEALwMKpmFiTEDtgK3tkajWXwTYzV/u54YUsyWrIK1NDAjfDAEzmWaFNfl2S1HZouPUcL4Cg5DGmVDm2w3QRNlA4Vgd2WvaDWHrv7jqpEOmWy8QChYPdLu+iT4N950vKltM4HYLK4HPjWZRAFu5wGyFdjKgUFnv8kbgfafJJSZ/VVFUtrjAdctAwH3omgl2g3rrNyFrtnuOySFsTcZLx5CSTHhImmqN33jrh6KybSDbrelnQm+mFfCgsfYHsN3Xlgo7v6DNiToh+jUBVQhbV/FFZQt2g+tdxH15yhZKXpYyZ7v/GmgUctcZKNZRluwtdQRrBynQo11WRWU7RLZbsx43b2nUO0DfrPyes2ObxHch2gfaqIMTd0IUP4jLlusNKDrbAXxI2XYDbLPrt4l8jqL9243A6LMVYjBW4rJ1fbGHwdZZjldg1Qts6R9sVg1ZsU24VxDKdhgMdCOexdhs3b2ForLt87poxeZ8KGCbje8i8R5fKNvHwKBMCVa/2Dpss/A5prA3H8p2EDCmejQP6xOxVVvte0fadbjRmm0GewVpxNSEsmVW9ajdT8VWVv38Mfg8G7apxMK9hKLFyhesTj4VW5FkwTalGFZuRUdf2JwJSLv9Yitnwjat2PO/4WwlZsLV6VlPX2zlDNimlzMiyNH0BN1xsk3z8r7Yyg7bRAXtQd9p5noJcqs9wShVLDz0xVZ2dzyTECENSTdHU1ATQaBbKAD4ydiqfNmyTXI2kN+OlHOrucU6qeBmJRSV+lRsBWgdtmnk8aVeEyHyEOsvthuxw6sfJc+/zaCWSeQR1iFs//G9gl0qWyXNm8+kBlFIuNRW0mB7WHt8DtuBcB+II0m24qSsaoeNQpsshbJtxmV7kHvzuH8bcapkohpEWdX8i0IbxjZu3MVhxtQ04RkizstJUjsss1qdUWhD2cKo9e/Ewm1jdJsQmBBRCbyAxxUc3UWhDWULT//vxLA6AWEQOhM4dBLFzBskR6JcjqFs8ekPOPYcjwB0c1/gPhZ1pHMq7eYNkiNRbqlwthDjqpIyYU08tb7oOSNYjsZ9Dhip6XGwVUWbdFvtxkm/Mzt3cp0KWPc80i0VyhbtS8NX12HlejE2oetpAY8GffKysq60qxmG0dMVZ31XsJON1xLpughliwnnRF3MUaoFz9Gs8m8F0dn0yWnivNvWlF3BaUhIxkgMtlD5geSAMRBt/sfkZsnZkp/szBYj/ryIMKidRXdJ6PXuHxfu+NvwyPNotlD5gSoeoPuLo3GKbBnHSRK2M1jLeRYxdGc6MNCUcvfzRFGs2Ugk2lC2mFhAloCQdO2HRmKEDjnvfA+2gklyH7aY9uTXIKLVzukf0KfzHiJvkgGJiISLYosGJmEFEby+S4cpLOGXfqmAURaLLR6vTRO7YUUTg21FVDsM3FXkjGy69POMhsKdfxsVdRHFFgxlPygDgeheJgKOo7Lu6fdkD7ZYE9Uv7XUMvxDW2PV9ERjLSWr+gTHlF1aGzT/Pz/wnb5asRC+BwtmeY+y9+5wwJJPRzMQzHbwO3cGSivHYwtDrt4wp+iusC+c1tox/ToymMt+YwoNi3XcqyW5BJhK9BApnOwBYqrzNOH/EHkI8OjBWr/S+6dEVthRqPLZMrpK16VdN5jURs1XtzmbwrTE1kemGD2bgOh0Xkhv9qqWJ0kaykGgzOZwtUxheq58PpCpWoaVLIzZqUtP617MTnU0oi8eWCYtX9eHp6VBlY+VDauxaVns4bJWYVEVaGxsGZVU7Xb0MgxkqxO/lBZtw72IcShfOtsZ2BkVRUL0GPWoFC1Ktq4zrlrFVHLVJY7GtMT1UNnR9O4xQCy+0NrZmGGxODP1vadCDYUlXbF3B4xnIQZQFm3CjvclRbIMJQ6zAqSzCuvKlMXkj4rFtsof7eBc9kqlYxDaYWOw0F/bg+6L/cFtKVkYFG5SjvVKRbMMP4ljNthD1ykvWXos1pAuLeGwFB4Ws9U2mYgFbtcV/J+lmlrQ2iUXvwFbgVJLM9tj3kYhcoFhspX5oiLZ2hsP+jHv1uoYG4RGTbY37WqmlMnU0CdjaNcYqcGEx4RVhxwOtmgPqKJRrKk63jWQrtVnzhYhmMOdkmbzBUF0vJIhpFJMtfz5Y0yEOXwFbvSJ1Od0+cPST1OC+As5NGnhtgc4lf4+DNpqteS98fM0InEzJOXNG3Sw1aX3mmGx5s7cywy/4bNdulko9AFdT6QEy26drC5+udMJeXBhTWXTq065sVytNhTt5qaVu8JhUqc8C0bbmC3EUxGUrXbP3UjdopYHfaD7bjSNiMGGwaRbvkNQh/0w6Q5kFLk2UzpemjKKoboUeXqrp/IPIH7uBU0RVrVTnhxh18FzSUms7bK/WG67QDbuqDQkaTJTwtQJOT3vi2DZd96xaVSNs/edwptW+QhY5qs17FddPdxY4TFLtKY3AqYxSYabcWJPtWk1Uzo4FV9Ua6vb0X3lztLGlaO1z0bhQa3nnCVtK1zNezuquyGSwq2p1IgYbAV5uK5Z3NvHE60kN2fuJZ/iWJ/5zTByK1b5cWjdbW7VkEuyHrjze63bPGQs2BzfX+4JjkEdp5/TsI2Gl/vaSZm02bNWNXk+btIazWmDiojLutAxdt7T7Y7KGMJue0LeiCRK8V/m4rVm6brQ6NZN3r4iD5Ju140b3rNumv+ZI5bFzX7cs3bLU7vB0LL7WzH0l9De8gslHiBmh9J0kGHeYiZhx/meRypFc+8rrU/Zq+MwyzygHJFpenj7mJf/McrVMNQE+nlzepD7RfglfzKvFzfvlr8xH6Ndfl+/fFs/5z7KfT8zpdHS7mC9vfr5ffn94eblLaEm/3r28PHz//ePnzXK+uB1Np1+jcIFkOp1ejEZXV1fPt2+Lxfzpabm8Wcs3kM1Hy+XT03y+eLt9Xl0+Gl1cfKH8YPkfa4XBX9VQglcAAAAASUVORK5CYII=" 
            alt ="" />

            </Link>
            

         </div>

         <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} 
            value={inputSearch} 
            placeholder= "Search" 
            type="text"/>
            <Link to={`/search/${inputSearch}`}>

            <SearchIcon className="header__inputButton"/>

            </Link>

         </div>

         <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar alt = "eunwoo" img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/170924_%ED%91%B8%EB%93%9C%ED%8A%B8%EB%9F%AD%EC%9D%B4%EB%B2%A4%ED%8A%B8.jpg/330px-170924_%ED%91%B8%EB%93%9C%ED%8A%B8%EB%9F%AD%EC%9D%B4%EB%B2%A4%ED%8A%B8.jpg"/>
             
         </div>
   
            
            
        </div>
    )
}

export default Header

 