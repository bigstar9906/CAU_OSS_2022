const playState = 0;    // 현재 상태가 play 중인지 pause 인지 pause 면 1 play 중이면 0 시작전 상태면 2
const savePlayer = 0;   // 저장된 플레이어
export function saveSnake(event)
{
    // if(playState == 1)          //현재 상태가 pause일때
    // {
    if(event.keyCode = 83){ //pause 상태이고 S (SAVE)를 눌렀을 때
        localStorage.setItem(savePlayer,JSON.stringify({name : "고정훈", Score : score, array : snake, target : apple}));  //새로운 div 창에서 입력된 값 저장
        savePlayer++;
        /* to do : savePlayer가 무한대로 늘어날순없으니 최대 저장 갯수를 정하던가 선택한 칸에 저장하도록 하던가 */
        if(savePlayer==5)
            savePlayer -= 5;        //일단 5칸 넘어가면 가장 오래된 기록부터 지우기
    }
    // }
}

export function loadSnake(event)
{
    // if(playState == 2)
    // {
    if(event.keyCode == 76)  // L눌렀을 때
        // 저장된 div 부르고 div 인덱스로 가져오기 -> savePlayer 가 인덱스
        localStorage.getItem(savePlayer);
    // }
}

export {saveSnake, loadSnake};