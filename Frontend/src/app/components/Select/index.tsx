import ISelectProps from "./Select";
import {
  StyledLabel,
  StyledOption,
  StyledSelect,
  StyledConstOption,
} from "./styles";

const Select = (props: ISelectProps) => {
  const { name, options, value, isValidated, register, onChange } = props;

  return (
    <>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      {isValidated ? (
        <StyledSelect name={name} id={name} {...register(name)}>
          <StyledConstOption value="">-Select-</StyledConstOption>
          {options?.map((option) => {
            return <StyledOption value={option}>{option}</StyledOption>;
          })}
        </StyledSelect>
      ) : (
        <StyledSelect name={name} id={name} value={value} onChange={onChange}>
          <StyledConstOption value="">-Select-</StyledConstOption>
          {options?.map((option) => {
            return <StyledOption value={option}>{option}</StyledOption>;
          })}
        </StyledSelect>
      )}
    </>
  );
};

export default Select;
