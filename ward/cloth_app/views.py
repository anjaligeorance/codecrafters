import os
from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd
from sklearn.tree import DecisionTreeClassifier

# Data dictionaries (assuming they're outside the function for better organization)
dictmaterial = {'wool': 10, 'cotton': 11, 'linen': 12, 'denim': 13, 'silk': 14, 'polyester': 15}
dictgender = {'male': 1, 'female': 0}
dictoccasion = {'work': 21, 'casual': 22, 'beach': 23, 'everyday': 24, 'evening': 25, 'wedding': 26, 'gym': 27, 'yoga': 28}
dictimage = {'blazer': 'blazer1.jpg', 'sweatshirt': 'sweatshirt1.jpg', 'shorts': 'shorts2.jpg', 'jeans': 'jeans1.jpg',
             'tshirt': 'tshirt1.jpg', 'dress': 'dress1.jpg', 'suit': 'suit1.jpg}', 'leggings': 'raincoatpant.jpg',
             'jogger': 'sweaterpant.jpg', 'pants': 'pants1.jpg', 'shirt': 'sweater2.jpg'}


def index(request):
    if request.POST:
        # Process form data
        gender = request.POST.get('gender').lower()
        occasion = request.POST.get('style').lower()
        clothtype = request.POST.get('clothtype').lower()

        project_root = os.path.dirname(os.path.abspath(__file__))  # Get project root path
        data_file_path = os.path.join(project_root, 'dataset7.csv')  # Join path to data.csv

        try:
            # Read CSV data (consider error handling for potential exceptions)
            df = pd.read_csv(data_file_path)
            x = df.drop(columns=['Dress type'])
            y = df['Dress type']

            # Train the model
            model = DecisionTreeClassifier()
            model.fit(x, y)

            # Make predictions
            predict = model.predict([[dictgender.get(gender), dictoccasion.get(occasion), dictmaterial.get(clothtype)]])
            # Assign predicted image names
            value1 = dictimage.get(predict[0]).lower()
            value2 = dictimage.get(predict[1]).lower()
            # Pass data to the template (only when there's POST data)
            return render(request, 'get.html', {'value1': value1, 'value2': value2})
        except FileNotFoundError:
            # Handle case where CSV file is not found
            return render(request, 'index.html', {'error_message': "CSV data file not found."})
        except Exception as e:  # Catch other potential errors
            return render(request, 'index.html', {'error_message': "An error occurred: " + str(e)})

    else:
        # Handle cases where there's no POST data (optional)
        return render(request, 'index.html', {})  # Can pass an empty dictionary
def get(request):
    value1 = request.GET.get('value1')
    value2 = request.GET.get('value2')
    return render(request,'get.html',{'value1':value1,'value2':value2})
