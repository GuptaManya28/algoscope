import os
from flask import Flask, render_template, request, jsonify
from ml.analyzer import analyze_code

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():
    code = request.form.get("code", "").strip()
    if not code:
        return render_template("index.html", error="Please paste some code to analyze.")

    result = analyze_code(code)
    return render_template("result.html", result=result, code=code)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host="0.0.0.0", port=port)
