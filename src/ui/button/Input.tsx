import TextField from '@mui/material/TextField';

type props={
  lable:string,
  classes:string
}
const Input:React.FC<props>=({lable,classes}:props)=>{
    return(
                   <TextField className={classes}
              id="input-with-icon-adornment"
              variant="filled"
              label={lable}
              margin="dense"
              dir="rtl"
        
             
            />
    )

}

export default Input;