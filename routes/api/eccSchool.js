const express = require('express');
const router = express.Router();
const eccSchool = require('../../models/eccschool');

router.post('/createECCSchool',
        async (req,res) => {
        
                const {
                    SchoolGradeLevelAssociationNaturalKey,
                    SchoolYearNaturalKey,
                    EducationOrgNaturalKey,
                    GradeLvlTypeNaturalKey
                  }  = req.body;
        
            let existingSchool;
            try {
                existingSchool = await eccSchool.findOne({SchoolGradeLevelAssociationNaturalKey : SchoolGradeLevelAssociationNaturalKey});
        
            } catch (error) {
                return res.status(500).json({message: 'Issue verifying if school exists'});
            }
           
            if(existingSchool){
                return res.status(500).json({message: 'school Record exists already..'});
            }
            
        
            const createdEccSchool = new eccSchool({
                SchoolGradeLevelAssociationNaturalKey,
                SchoolYearNaturalKey,
                EducationOrgNaturalKey,
                GradeLvlTypeNaturalKey,
              
            });
        
            
            await createdEccSchool.save().then(() => {
                res.status(201).json({eccSchool: createdEccSchool.toObject({getters: true})});
            })
            .catch((error) => {
                return res.status(500).json({message: 'Failed add up ecc School record. please try again: -' + error});
            });
        
            res.status(201);
        
});

router.get('/fetchAllSchools', 
            async (req,res) => {

                let eccSchoolRecord;
            
                try {
                    eccSchoolRecord = await eccSchool.find();
                    return res.status(200).json({ eccShool: eccSchoolRecord });
                } catch (error) {
                    return res
                    .status(500)
                    .json({ message: 'No Records returned for your fetch' });
                } 
            
});

module.exports = router;