gdjs.SceneCode = {};


gdjs.SceneCode.GDTextObjects1= [];
gdjs.SceneCode.GDTextObjects2= [];

gdjs.SceneCode.conditionTrue_0 = {val:false};
gdjs.SceneCode.condition0IsTrue_0 = {val:false};
gdjs.SceneCode.condition1IsTrue_0 = {val:false};

gdjs.SceneCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.SceneCode.GDTextObjects1.length = 0;
gdjs.SceneCode.GDTextObjects2.length = 0;


{

gdjs.SceneCode.GDTextObjects1.createFrom(runtimeScene.getObjects("Text"));

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("Center");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.SceneCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTextObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.SceneCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTextObjects1[i].setVariableString(gdjs.SceneCode.GDTextObjects1[i].getVariables().getFromIndex(0), "TEXT ALIGNMENT: "+gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.SceneCode.GDTextObjects1.createFrom(runtimeScene.getObjects("Text"));

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Typing");
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Typing");
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.SceneCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTextObjects1[i].setString(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(gdjs.SceneCode.GDTextObjects1[i].getVariables().getFromIndex(0))), 0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}
{ //Subevents

{

gdjs.SceneCode.GDTextObjects2.createFrom(gdjs.SceneCode.GDTextObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "Center";
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.SceneCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDTextObjects2[i].setX(400-(gdjs.SceneCode.GDTextObjects2[i].getWidth())/2);
}
}}

}


{

gdjs.SceneCode.GDTextObjects2.createFrom(gdjs.SceneCode.GDTextObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "Right";
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.SceneCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDTextObjects2[i].setX(650-(gdjs.SceneCode.GDTextObjects2[i].getWidth()));
}
}}

}


{

gdjs.SceneCode.GDTextObjects2.createFrom(gdjs.SceneCode.GDTextObjects1);

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "Left";
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.SceneCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDTextObjects2[i].setX(150);
}
}}

}

} //End of subevents
}

}

return;
}
gdjs['SceneCode']= gdjs.SceneCode;
