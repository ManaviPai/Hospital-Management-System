from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask_cors import CORS

db_connect = create_engine('mysql+pymysql://manavi:master1234@127.0.0.1:3306/miniproject')
app = Flask(__name__)
api = Api(app)
CORS(app)

class Family(Resource):
    def get(self):
        conn = db_connect.connect() # connect to database
        query = conn.execute("select * from family") # This line performs query and returns json result
        return {'family': [i[0] for i in query.cursor.fetchall()]} # Fetches first column that is Employee ID
    
    def post(self):
        conn = db_connect.connect()
        data = request.get_json()
        pid = data['pid']
        fname = data['fname']
        lname = data['lname']
        dob = data['dob']
        gender = data['gender']
        blood = data['blood']
        age = data['age']
        conn.execute("insert into family values({},'{}','{}','{}','{}','{}',{});".format(pid, fname, lname, dob, gender, blood, age))
        # print("insert into family values({},'{}','{}','{}','{}','{}',{});".format(pid, fname, lname, dob, gender, blood, age))
        return {'status':'success'}

    
class Doctor(Resource):
    def get(self,specialisation):
        print("specialisation")
        conn = db_connect.connect()
        query = conn.execute("select fname, lname, specialisation, timestart, timeend from doctor d, available a where d.did = a.did and d.specialisation = '{}';".format(specialisation)).fetchall()
        print(query[0])
        ans = {
            "fname":query[0][0],
            "lname":query[0][1],
            "specialisation":query[0][2],
            "timestart":query[0][3],
            "timeend":query[0][4]
                    }
        return jsonify(ans)

class MainPage(Resource):
    def post(self):
        conn = db_connect.connect()
        data = request.get_json()
        fname = data['fname']
        lname = data['lname']
        print(fname + "       "+lname)
        # print(lname)
        query = conn.execute("select * from family where fname = '{}' and lname = '{}';".format(fname, lname)).fetchall()
        dsid = conn.execute("select disid from disdef where pid = (select pid from family where fname ='{}' and lname = '{}');".format(fname,lname)).fetchall()
        dfid = conn.execute("select defid from disdef where pid = (select pid from family where fname ='{}' and lname = '{}');".format(fname,lname)).fetchall()
        dob1 =str(query[0][3])
        if dfid[0][0] is None  and dsid[0][0] is None:
            defic = 'None'
            disis = 'None'
        elif dfid[0][0] is None:
            query2 = conn.execute("call fam_def('{}','{}');".format(fname,lname)).fetchall()
            defic = "None"
            disis = query2[0][0]
        elif dsid[0][0] is None:
            query1 = conn.execute("call fam_dis('{}','{}');".format(fname,lname)).fetchall()
            disis = "None"
            defic = query1[0][0] 
        else:
            query1 = conn.execute("call fam_dis('{}','{}');".format(fname,lname)).fetchall()
            query2 = conn.execute("call fam_def('{}','{}');".format(fname,lname)).fetchall()
            defic = query1[0][0]
            disis = query2[0][0]
        ans = {
            "deficiency":defic,
            "disease": disis,
            "pid":query[0][0],
            "fname" : query[0][1],
            "lname": query[0][2],
            "dob": dob1,
            "gender": query[0][4],
            "blood": query[0][5],
            "age":query[0][6]
        }
        return jsonify(ans)

class Medication(Resource):
    def get(self,disease ):
        conn = db_connect.connect()
        query = conn.execute("call disease_med('{}');".format(disease)).fetchall()
        print(query[0])
        ans = {
            "DisName": query[0][0],
            "Symp": query[0][1],
            "MedN":query[0][2]
        }
        return jsonify(ans)

class Medication2(Resource):
    def get(self,deficiency):
        conn = db_connect.connect()
        query = conn.execute("call deficiency_med('{}');".format(deficiency)).fetchall()
        print(query[0])
        ans = {
            "DefName": query[0][0],
            "Symp": query[0][1],
            "MedN":query[0][2]
        }
        return jsonify(ans)


api.add_resource(Family, '/family') # Route_1
api.add_resource(Doctor, '/doctor/<specialisation>') # Route_2
api.add_resource(MainPage, '/home')
api.add_resource(Medication, '/medication/<disease>')
api.add_resource(Medication2, '/medication2/<deficiency>')
# whatsapp xD

if __name__ == '__main__':
     app.run(port='5008', debug=True)