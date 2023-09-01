

export interface Times {
  bufferedTime: number;
  currentTime: number;
  duration: number;
  percentBuffered: string;
  percentCompleted: string;
}


export function createTimesStateRecord (){
  return Object.assign({}, {
    bufferedTime: 0,
    currentTime: 0,
    duration: 0,
    percentBuffered: '0%',
    percentCompleted: '0%'
  });

}


