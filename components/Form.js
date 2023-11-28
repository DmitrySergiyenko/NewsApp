import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';


export default function Form({ addArticle} ) {
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values, action) =>{
                addArticle(values);
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.name} 
                            placeholder='Enter Name' 
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.anons}
                            multiline
                            placeholder='Enter Anons' 
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.full}
                            multiline
                            placeholder='Enter full article' 
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput 
                            style={styles.input}
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
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5,

    }
})


