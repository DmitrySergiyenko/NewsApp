import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';


export default function Form() {
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values) =>{
                console.log(values);
            }}>
                {(props) => (
                    <View>
                        <TextInput 
                            value={props.values.name} 
                            placeholder='Enter Name' 
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput 
                            value={props.values.anons}
                            multiline
                            placeholder='Enter Anons' 
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput 
                            value={props.values.full}
                            multiline
                            placeholder='Enter full article' 
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput 
                            value={props.values.img} 
                            placeholder='Enter image' 
                            onChangeText={props.handleChange('img')}
                        />
                        <Button title='Add' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({

})


