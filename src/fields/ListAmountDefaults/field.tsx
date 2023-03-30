import React from 'react';
import { useAllFormFields, reduceFieldsToValues, getSiblingData } from 'payload/components/forms'

const Field: React.FC = () => {
  const [fields, dispatchFields] = useAllFormFields();
  console.log({fields})
  const formData = reduceFieldsToValues(fields, true);
  console.log(formData)

    const setup = async (e) => {
        e.preventDefault();

        const newListAmounts = formData.components.map(c => ({
            component: c,
            requiredAmount: 1
        }));

        for (let i = 0; i < formData.variations.length; i++) {
            dispatchFields({
                type: 'UPDATE',
                path: `variations.${i}.listAmounts`,
                value: newListAmounts
            })
        }
    }
    return (
        <>
            <button onClick={setup}>Setup</button>
        </>
    )
}

export default Field;