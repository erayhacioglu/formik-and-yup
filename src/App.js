import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';

const App = () => {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		touched,
		resetForm,
	} = useFormik({
		initialValues: {
			fullname: '',
			email: '',
			password: '',
			confirmPassword: '',
			gender: '',
			salary: '',
			phone: '',
			birthday: null,
			website: '',
			color: '',
			number: '',
			city: '',
			address: '',
			contract: false,
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values));
			resetForm();
		},
		validationSchema,
	});

	return (
		<div className='container my-4'>
			<div className='row'>
				<div className='col-md-6 offset-md-3'>
					<div className='card'>
						<div className='card-header'>
							<h5 className='card-title text-center'>React Formik Form And Yup</h5>
						</div>
						<div className='card-body'>
							<form onSubmit={handleSubmit}>
								<div className='form-group my-2'>
									<label htmlFor='fullname' className='form-label mb-2'>
										Fullname
									</label>
									<input
										type='text'
										name='fullname'
										className={`form-control ${
											errors.fullname && touched.fullname && 'is-invalid'
										}`}
										value={values.fullname}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.fullname && touched.fullname && (
									<span className='text-danger'>{errors.fullname}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='email' className='form-label mb-2'>
										Email
									</label>
									<input
										type='email'
										name='email'
										className={`form-control ${
											errors.email && touched.email && 'is-invalid'
										}`}
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.email && touched.email && (
									<span className='text-danger'>{errors.email}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='password' className='form-label mb-2'>
										Şifre
									</label>
									<input
										type='password'
										name='password'
										className={`form-control ${
											errors.password && touched.password && 'is-invalid'
										}`}
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.password && touched.password && (
									<span className='text-danger'>{errors.password}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='confirmPassword' className='form-label mb-2'>
										Şifre Tekrar
									</label>
									<input
										type='password'
										name='confirmPassword'
										className={`form-control ${
											errors.confirmPassword &&
											touched.confirmPassword &&
											'is-invalid'
										}`}
										value={values.confirmPassword}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.confirmPassword && touched.confirmPassword && (
									<span className='text-danger'>{errors.confirmPassword}</span>
								)}
								<div className='d-flex my-2'>
									<div className='form-check'>
										<label htmlFor='male' className='form-check-label me-2'>
											Male
										</label>
										<input
											type='radio'
											name='gender'
											id='male'
											value='male'
											className='form-check-input'
											onChange={handleChange}
											onBlur={handleBlur}
										/>
									</div>
									<div className='form-check'>
										<label htmlFor='female' className='form-check-label me-2'>
											Female
										</label>
										<input
											type='radio'
											name='gender'
											id='female'
											value='female'
											className='form-check-input'
											onChange={handleChange}
											onBlur={handleBlur}
										/>
									</div>
								</div>
								{errors.gender && touched.gender && (
									<span className='text-danger'>{errors.gender}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='salary' className='form-label mb-2'>
										Salary (4250-50000)
									</label>
									<input
										type='range'
										id='salary'
										name='salary'
										min='0'
										max='50000'
										step='500'
										className={`form-range ${
											errors.salary && touched.salary && 'is-invalid'
										}`}
										value={values.salary}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									<span>{values.salary}</span>
								</div>
								{errors.salary && touched.salary && (
									<span className='text-danger'>{errors.salary}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='phone' className='form-label mb-2'>
										Phone
									</label>
									<input
										type='tel'
										name='phone'
										className={`form-control ${
											errors.phone && touched.phone && 'is-invalid'
										}`}
										value={values.phone}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.phone && touched.phone && (
									<span className='text-danger'>{errors.phone}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='birthday' className='form-label mb-2'>
										Birthday
									</label>
									<input
										type='date'
										name='birthday'
										className={`form-control ${
											errors.birthday && touched.birthday && 'is-invalid'
										}`}
										value={values.birthday}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.birthday && touched.birthday && (
									<span className='text-danger'>{errors.birthday}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='website' className='form-label mb-2'>
										Website
									</label>
									<input
										type='url'
										name='website'
										className={`form-control ${
											errors.website && touched.website && 'is-invalid'
										}`}
										value={values.website}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.website && touched.website && (
									<span className='text-danger'>{errors.website}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='color' className='form-label mb-2'>
										Favourite Color
									</label>
									<input
										type='color'
										name='color'
										className={`form-control ${
											errors.color && touched.color && 'is-invalid'
										}`}
										value={values.color}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.color && touched.color && (
									<span className='text-danger'>{errors.color}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='number' className='form-label mb-2'>
										Favourite Number
									</label>
									<input
										type='number'
										name='number'
										className={`form-control ${
											errors.number && touched.number && 'is-invalid'
										}`}
										value={values.number}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.number && touched.number && (
									<span className='text-danger'>{errors.number}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='city' className='form-label mb-2'>
										Favourite City
									</label>
									<select
										className={`form-control ${
											errors.city && touched.city && 'is-invalid'
										}`}
										name='city'
										onChange={handleChange}
										onBlur={handleBlur}
									>
										<option selected>City</option>
										<option value='berlin'>Berlin</option>
										<option value='istanbul'>İstanbul</option>
										<option value='miami'>Miami</option>
										<option value='paris'>Paris</option>
										<option value='tokyo'>Tokyo</option>
									</select>
								</div>
								{errors.city && touched.city && (
									<span className='text-danger'>{errors.city}</span>
								)}
								<div className='form-group my-2'>
									<label htmlFor='address' className='form-label'>
										Address
									</label>
									<textarea
										name='address'
										id='address'
										cols='30'
										rows='4'
										className={`form-control ${
											errors.address && touched.address && 'is-invalid'
										}`}
										value={values.address}
										onChange={handleChange}
										onBlur={handleBlur}
									></textarea>
								</div>
								{errors.address && touched.address && (
									<span className='text-danger'>{errors.address}</span>
								)}
								<div className='form-check my-2'>
									<label htmlFor='contract' className='form-check-label me-3'>
										I agree
									</label>
									<input
										type='checkbox'
										name='contract'
										id='contract'
										className='form-check-input'
										value={values.contract}
										onChange={handleChange}
									/>
								</div>
								{errors.contract && (
									<span className='text-danger'>{errors.contract}</span>
								)}
								<div className='form-group mt-3'>
									<button className='btn btn-primary w-100'>Save</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
