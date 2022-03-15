import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	fullname: Yup.string().required('fullname is required'),
	email: Yup.string().email('invalid email').required('email is required'),
	password: Yup.string()
		.min(8, 'password must be at least 8 characters')
		.required('password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'passwords do not match')
		.required('confirm password is required'),
	gender: Yup.string().required('gender is required'),
	salary: Yup.number()
		.min(4250, 'minimum wave is 4250')
		.max(50000, 'you are not working')
		.required('salary is required'),
	phone: Yup.string().required('phone is required'),
	birthday: Yup.date()
		.min(new Date(1900, 0, 1), 'please enter a valid date')
		.nullable()
		.required('birthday is required'),
	website: Yup.string().url('this is not url').required('website is required'),
	color: Yup.string().required('color is required'),
	number: Yup.number()
		.positive('please enter the positive number')
		.integer()
		.required('number is required'),
	city: Yup.string()
		.oneOf(
			['berlin', 'istanbul', 'miami', 'paris', 'tokyo'],
			'please choose your city'
		)
		.required('city is required'),
	address: Yup.string()
		.max(50, 'can be up to 50 characters')
		.required('address is required'),
	contract: Yup.boolean()
		.oneOf([true], 'please accept the contract')
		.required('contract is required'),
});

export default validationSchema;
