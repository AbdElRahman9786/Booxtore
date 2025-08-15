import TextField from '@mui/material/TextField';

type props={
  lable:string,
  classes:string,
  name:string,
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=> void
}
const Input:React.FC<props>=({lable,classes,name,onChange}:props)=>{
    return(
                   <TextField className={classes}
              id="input-with-icon-adornment"
              variant="filled"
              label={lable}
              margin="dense"
              dir="rtl"
              name={name}
              onChange={onChange}
        
             
            />
    )

}

export default Input;