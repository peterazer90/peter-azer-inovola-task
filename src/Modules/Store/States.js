const initClientRegister = {
  name: '',
  mobile: '',
  password: '',
  firstName: '',
  lastName: '',
  date: '',
  accountType: 'Student',
};
/// ////////////////////////////////////////////////////////////////////////
const EXECUTE_INIT_STATE = (INIT_STATE) => ({
  data: { ...INIT_STATE },
  validation: { ...INIT_STATE },
  disabled: true,
  formFeedback: null,
});
/// ////////////////////////////////////////////////////////////////////////

export default {
  REGISTER: EXECUTE_INIT_STATE(initClientRegister),
};
