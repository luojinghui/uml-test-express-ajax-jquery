function question(name,value,score) {
    this.name = name;
    this.value = value;
    this.score = score || 0;
}

module.exports = question;
