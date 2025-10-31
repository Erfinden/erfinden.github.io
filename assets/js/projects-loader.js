// Automatisches Laden der Projektinformationen
class ProjectsLoader {
    constructor() {
        // Projekt-Liste - Automatisches Laden nur für existierende Projekte
        this.projects = [
            { id: 'projekt-1', path: 'projekte/projekt-1/', thumbnailClass: 'projekt-1-thumb' },
            { id: 'projekt-2', path: 'projekte/projekt-2/', thumbnailClass: 'projekt-2-thumb' },
            { id: 'projekt-3', path: 'projekte/projekt-3/', thumbnailClass: 'projekt-3-thumb' },
            { id: 'projekt-4', path: 'projekte/projekt-4/', thumbnailClass: 'projekt-4-thumb' },
/*            { id: 'projekt-5', path: 'projekte/projekt-5/', thumbnailClass: 'projekt-5-thumb' },
            { id: 'projekt-6', path: 'projekte/projekt-6/', thumbnailClass: 'projekt-6-thumb' },
            { id: 'projekt-7', path: 'projekte/projekt-7/', thumbnailClass: 'projekt-7-thumb' },
            { id: 'projekt-8', path: 'projekte/projekt-8/', thumbnailClass: 'projekt-8-thumb' },
            { id: 'projekt-9', path: 'projekte/projekt-9/', thumbnailClass: 'projekt-9-thumb' },
            { id: 'projekt-10', path: 'projekte/projekt-10/', thumbnailClass: 'projekt-10-thumb' },
            { id: 'projekt-11', path: 'projekte/projekt-11/', thumbnailClass: 'projekt-11-thumb' },
            { id: 'projekt-12', path: 'projekte/projekt-12/', thumbnailClass: 'projekt-12-thumb' },
            { id: 'projekt-13', path: 'projekte/projekt-13/', thumbnailClass: 'projekt-13-thumb' },
            { id: 'projekt-14', path: 'projekte/projekt-14/', thumbnailClass: 'projekt-14-thumb' },
            { id: 'projekt-15', path: 'projekte/projekt-15/', thumbnailClass: 'projekt-15-thumb' },
            { id: 'projekt-16', path: 'projekte/projekt-16/', thumbnailClass: 'projekt-16-thumb' },
            { id: 'projekt-17', path: 'projekte/projekt-17/', thumbnailClass: 'projekt-17-thumb' },
            { id: 'projekt-18', path: 'projekte/projekt-18/', thumbnailClass: 'projekt-18-thumb' },
            { id: 'projekt-19', path: 'projekte/projekt-19/', thumbnailClass: 'projekt-19-thumb' },
            { id: 'projekt-20', path: 'projekte/projekt-20/', thumbnailClass: 'projekt-20-thumb' },
            { id: 'projekt-21', path: 'projekte/projekt-21/', thumbnailClass: 'projekt-21-thumb' },
            { id: 'projekt-22', path: 'projekte/projekt-22/', thumbnailClass: 'projekt-22-thumb' },
            { id: 'projekt-23', path: 'projekte/projekt-23/', thumbnailClass: 'projekt-23-thumb' },
            { id: 'projekt-24', path: 'projekte/projekt-24/', thumbnailClass: 'projekt-24-thumb' },
            { id: 'projekt-25', path: 'projekte/projekt-25/', thumbnailClass: 'projekt-25-thumb' },
            { id: 'projekt-26', path: 'projekte/projekt-26/', thumbnailClass: 'projekt-26-thumb' },
            { id: 'projekt-27', path: 'projekte/projekt-27/', thumbnailClass: 'projekt-27-thumb' },
            { id: 'projekt-28', path: 'projekte/projekt-28/', thumbnailClass: 'projekt-28-thumb' },
            { id: 'projekt-29', path: 'projekte/projekt-29/', thumbnailClass: 'projekt-29-thumb' },
            { id: 'projekt-30', path: 'projekte/projekt-30/', thumbnailClass: 'projekt-30-thumb' },
            { id: 'projekt-31', path: 'projekte/projekt-31/', thumbnailClass: 'projekt-31-thumb' },
            { id: 'projekt-32', path: 'projekte/projekt-32/', thumbnailClass: 'projekt-32-thumb' },
            { id: 'projekt-33', path: 'projekte/projekt-33/', thumbnailClass: 'projekt-33-thumb' },
            { id: 'projekt-34', path: 'projekte/projekt-34/', thumbnailClass: 'projekt-34-thumb' },
            { id: 'projekt-35', path: 'projekte/projekt-35/', thumbnailClass: 'projekt-35-thumb' },
            { id: 'projekt-36', path: 'projekte/projekt-36/', thumbnailClass: 'projekt-36-thumb' },
            { id: 'projekt-37', path: 'projekte/projekt-37/', thumbnailClass: 'projekt-37-thumb' },
            { id: 'projekt-38', path: 'projekte/projekt-38/', thumbnailClass: 'projekt-38-thumb' },
            { id: 'projekt-39', path: 'projekte/projekt-39/', thumbnailClass: 'projekt-39-thumb' },
            { id: 'projekt-40', path: 'projekte/projekt-40/', thumbnailClass: 'projekt-40-thumb' },
            { id: 'projekt-41', path: 'projekte/projekt-41/', thumbnailClass: 'projekt-41-thumb' },
            { id: 'projekt-42', path: 'projekte/projekt-42/', thumbnailClass: 'projekt-42-thumb' },
            { id: 'projekt-43', path: 'projekte/projekt-43/', thumbnailClass: 'projekt-43-thumb' },
            { id: 'projekt-44', path: 'projekte/projekt-44/', thumbnailClass: 'projekt-44-thumb' },
            { id: 'projekt-45', path: 'projekte/projekt-45/', thumbnailClass: 'projekt-45-thumb' },
            { id: 'projekt-46', path: 'projekte/projekt-46/', thumbnailClass: 'projekt-46-thumb' },
            { id: 'projekt-47', path: 'projekte/projekt-47/', thumbnailClass: 'projekt-47-thumb' },
            { id: 'projekt-48', path: 'projekte/projekt-48/', thumbnailClass: 'projekt-48-thumb' },
            { id: 'projekt-49', path: 'projekte/projekt-49/', thumbnailClass: 'projekt-49-thumb' },
            { id: 'projekt-50', path: 'projekte/projekt-50/', thumbnailClass: 'projekt-50-thumb' },
            { id: 'projekt-51', path: 'projekte/projekt-51/', thumbnailClass: 'projekt-51-thumb' },
            { id: 'projekt-52', path: 'projekte/projekt-52/', thumbnailClass: 'projekt-52-thumb' },
            { id: 'projekt-53', path: 'projekte/projekt-53/', thumbnailClass: 'projekt-53-thumb' },
            { id: 'projekt-54', path: 'projekte/projekt-54/', thumbnailClass: 'projekt-54-thumb' },
            { id: 'projekt-55', path: 'projekte/projekt-55/', thumbnailClass: 'projekt-55-thumb' },
            { id: 'projekt-56', path: 'projekte/projekt-56/', thumbnailClass: 'projekt-56-thumb' },
            { id: 'projekt-57', path: 'projekte/projekt-57/', thumbnailClass: 'projekt-57-thumb' },
            { id: 'projekt-58', path: 'projekte/projekt-58/', thumbnailClass: 'projekt-58-thumb' },
            { id: 'projekt-59', path: 'projekte/projekt-59/', thumbnailClass: 'projekt-59-thumb' },
            { id: 'projekt-60', path: 'projekte/projekt-60/', thumbnailClass: 'projekt-60-thumb' },
            { id: 'projekt-61', path: 'projekte/projekt-61/', thumbnailClass: 'projekt-61-thumb' },
            { id: 'projekt-62', path: 'projekte/projekt-62/', thumbnailClass: 'projekt-62-thumb' },
            { id: 'projekt-63', path: 'projekte/projekt-63/', thumbnailClass: 'projekt-63-thumb' },
            { id: 'projekt-64', path: 'projekte/projekt-64/', thumbnailClass: 'projekt-64-thumb' },
            { id: 'projekt-65', path: 'projekte/projekt-65/', thumbnailClass: 'projekt-65-thumb' },
            { id: 'projekt-66', path: 'projekte/projekt-66/', thumbnailClass: 'projekt-66-thumb' },
            { id: 'projekt-67', path: 'projekte/projekt-67/', thumbnailClass: 'projekt-67-thumb' },
            { id: 'projekt-68', path: 'projekte/projekt-68/', thumbnailClass: 'projekt-68-thumb' },
            { id: 'projekt-69', path: 'projekte/projekt-69/', thumbnailClass: 'projekt-69-thumb' },
            { id: 'projekt-70', path: 'projekte/projekt-70/', thumbnailClass: 'projekt-70-thumb' },
            { id: 'projekt-71', path: 'projekte/projekt-71/', thumbnailClass: 'projekt-71-thumb' },
            { id: 'projekt-72', path: 'projekte/projekt-72/', thumbnailClass: 'projekt-72-thumb' },
            { id: 'projekt-73', path: 'projekte/projekt-73/', thumbnailClass: 'projekt-73-thumb' },
            { id: 'projekt-74', path: 'projekte/projekt-74/', thumbnailClass: 'projekt-74-thumb' },
            { id: 'projekt-75', path: 'projekte/projekt-75/', thumbnailClass: 'projekt-75-thumb' },
            { id: 'projekt-76', path: 'projekte/projekt-76/', thumbnailClass: 'projekt-76-thumb' },
            { id: 'projekt-77', path: 'projekte/projekt-77/', thumbnailClass: 'projekt-77-thumb' },
            { id: 'projekt-78', path: 'projekte/projekt-78/', thumbnailClass: 'projekt-78-thumb' },
            { id: 'projekt-79', path: 'projekte/projekt-79/', thumbnailClass: 'projekt-79-thumb' },
            { id: 'projekt-80', path: 'projekte/projekt-80/', thumbnailClass: 'projekt-80-thumb' },
            { id: 'projekt-81', path: 'projekte/projekt-81/', thumbnailClass: 'projekt-81-thumb' },
            { id: 'projekt-82', path: 'projekte/projekt-82/', thumbnailClass: 'projekt-82-thumb' },
            { id: 'projekt-83', path: 'projekte/projekt-83/', thumbnailClass: 'projekt-83-thumb' },
            { id: 'projekt-84', path: 'projekte/projekt-84/', thumbnailClass: 'projekt-84-thumb' },
            { id: 'projekt-85', path: 'projekte/projekt-85/', thumbnailClass: 'projekt-85-thumb' },
            { id: 'projekt-86', path: 'projekte/projekt-86/', thumbnailClass: 'projekt-86-thumb' },
            { id: 'projekt-87', path: 'projekte/projekt-87/', thumbnailClass: 'projekt-87-thumb' },
            { id: 'projekt-88', path: 'projekte/projekt-88/', thumbnailClass: 'projekt-88-thumb' },
            { id: 'projekt-89', path: 'projekte/projekt-89/', thumbnailClass: 'projekt-89-thumb' },
            { id: 'projekt-90', path: 'projekte/projekt-90/', thumbnailClass: 'projekt-90-thumb' },
            { id: 'projekt-91', path: 'projekte/projekt-91/', thumbnailClass: 'projekt-91-thumb' },
            { id: 'projekt-92', path: 'projekte/projekt-92/', thumbnailClass: 'projekt-92-thumb' },
            { id: 'projekt-93', path: 'projekte/projekt-93/', thumbnailClass: 'projekt-93-thumb' },
            { id: 'projekt-94', path: 'projekte/projekt-94/', thumbnailClass: 'projekt-94-thumb' },
            { id: 'projekt-95', path: 'projekte/projekt-95/', thumbnailClass: 'projekt-95-thumb' },
            { id: 'projekt-96', path: 'projekte/projekt-96/', thumbnailClass: 'projekt-96-thumb' },
            { id: 'projekt-97', path: 'projekte/projekt-97/', thumbnailClass: 'projekt-97-thumb' },
            { id: 'projekt-98', path: 'projekte/projekt-98/', thumbnailClass: 'projekt-98-thumb' },
            { id: 'projekt-99', path: 'projekte/projekt-99/', thumbnailClass: 'projekt-99-thumb' },
            { id: 'projekt-100', path: 'projekte/projekt-100/', thumbnailClass: 'projekt-100-thumb' },
            { id: 'projekt-101', path: 'projekte/projekt-101/', thumbnailClass: 'projekt-101-thumb' },
            { id: 'projekt-102', path: 'projekte/projekt-102/', thumbnailClass: 'projekt-102-thumb' },
            { id: 'projekt-103', path: 'projekte/projekt-103/', thumbnailClass: 'projekt-103-thumb' },
            { id: 'projekt-104', path: 'projekte/projekt-104/', thumbnailClass: 'projekt-104-thumb' },
            { id: 'projekt-105', path: 'projekte/projekt-105/', thumbnailClass: 'projekt-105-thumb' },
            { id: 'projekt-106', path: 'projekte/projekt-106/', thumbnailClass: 'projekt-106-thumb' },
            { id: 'projekt-107', path: 'projekte/projekt-107/', thumbnailClass: 'projekt-107-thumb' },
            { id: 'projekt-108', path: 'projekte/projekt-108/', thumbnailClass: 'projekt-108-thumb' },
            { id: 'projekt-109', path: 'projekte/projekt-109/', thumbnailClass: 'projekt-109-thumb' },
            { id: 'projekt-110', path: 'projekte/projekt-110/', thumbnailClass: 'projekt-110-thumb' },
            { id: 'projekt-111', path: 'projekte/projekt-111/', thumbnailClass: 'projekt-111-thumb' },
            { id: 'projekt-112', path: 'projekte/projekt-112/', thumbnailClass: 'projekt-112-thumb' },
            { id: 'projekt-113', path: 'projekte/projekt-113/', thumbnailClass: 'projekt-113-thumb' },
            { id: 'projekt-114', path: 'projekte/projekt-114/', thumbnailClass: 'projekt-114-thumb' },
            { id: 'projekt-115', path: 'projekte/projekt-115/', thumbnailClass: 'projekt-115-thumb' },
            { id: 'projekt-116', path: 'projekte/projekt-116/', thumbnailClass: 'projekt-116-thumb' },
            { id: 'projekt-117', path: 'projekte/projekt-117/', thumbnailClass: 'projekt-117-thumb' },
            { id: 'projekt-118', path: 'projekte/projekt-118/', thumbnailClass: 'projekt-118-thumb' },
            { id: 'projekt-119', path: 'projekte/projekt-119/', thumbnailClass: 'projekt-119-thumb' },
            { id: 'projekt-120', path: 'projekte/projekt-120/', thumbnailClass: 'projekt-120-thumb' },
            { id: 'projekt-121', path: 'projekte/projekt-121/', thumbnailClass: 'projekt-121-thumb' },
            { id: 'projekt-122', path: 'projekte/projekt-122/', thumbnailClass: 'projekt-122-thumb' },
            { id: 'projekt-123', path: 'projekte/projekt-123/', thumbnailClass: 'projekt-123-thumb' },
            { id: 'projekt-124', path: 'projekte/projekt-124/', thumbnailClass: 'projekt-124-thumb' },
            { id: 'projekt-125', path: 'projekte/projekt-125/', thumbnailClass: 'projekt-125-thumb' },
            { id: 'projekt-126', path: 'projekte/projekt-126/', thumbnailClass: 'projekt-126-thumb' },
            { id: 'projekt-127', path: 'projekte/projekt-127/', thumbnailClass: 'projekt-127-thumb' },
            { id: 'projekt-128', path: 'projekte/projekt-128/', thumbnailClass: 'projekt-128-thumb' },
            { id: 'projekt-129', path: 'projekte/projekt-129/', thumbnailClass: 'projekt-129-thumb' },
            { id: 'projekt-130', path: 'projekte/projekt-130/', thumbnailClass: 'projekt-130-thumb' },
            { id: 'projekt-131', path: 'projekte/projekt-131/', thumbnailClass: 'projekt-131-thumb' },
            { id: 'projekt-132', path: 'projekte/projekt-132/', thumbnailClass: 'projekt-132-thumb' },
            { id: 'projekt-133', path: 'projekte/projekt-133/', thumbnailClass: 'projekt-133-thumb' },
            { id: 'projekt-134', path: 'projekte/projekt-134/', thumbnailClass: 'projekt-134-thumb' },
            { id: 'projekt-135', path: 'projekte/projekt-135/', thumbnailClass: 'projekt-135-thumb' },
            { id: 'projekt-136', path: 'projekte/projekt-136/', thumbnailClass: 'projekt-136-thumb' },
            { id: 'projekt-137', path: 'projekte/projekt-137/', thumbnailClass: 'projekt-137-thumb' },
            { id: 'projekt-138', path: 'projekte/projekt-138/', thumbnailClass: 'projekt-138-thumb' },
            { id: 'projekt-139', path: 'projekte/projekt-139/', thumbnailClass: 'projekt-139-thumb' },
            { id: 'projekt-140', path: 'projekte/projekt-140/', thumbnailClass: 'projekt-140-thumb' },
            { id: 'projekt-141', path: 'projekte/projekt-141/', thumbnailClass: 'projekt-141-thumb' },
            { id: 'projekt-142', path: 'projekte/projekt-142/', thumbnailClass: 'projekt-142-thumb' },
            { id: 'projekt-143', path: 'projekte/projekt-143/', thumbnailClass: 'projekt-143-thumb' },
            { id: 'projekt-144', path: 'projekte/projekt-144/', thumbnailClass: 'projekt-144-thumb' },
            { id: 'projekt-145', path: 'projekte/projekt-145/', thumbnailClass: 'projekt-145-thumb' },
            { id: 'projekt-146', path: 'projekte/projekt-146/', thumbnailClass: 'projekt-146-thumb' },
            { id: 'projekt-147', path: 'projekte/projekt-147/', thumbnailClass: 'projekt-147-thumb' },
            { id: 'projekt-148', path: 'projekte/projekt-148/', thumbnailClass: 'projekt-148-thumb' },
            { id: 'projekt-149', path: 'projekte/projekt-149/', thumbnailClass: 'projekt-149-thumb' },
            { id: 'projekt-150', path: 'projekte/projekt-150/', thumbnailClass: 'projekt-150-thumb' },
            { id: 'projekt-151', path: 'projekte/projekt-151/', thumbnailClass: 'projekt-151-thumb' },
            { id: 'projekt-152', path: 'projekte/projekt-152/', thumbnailClass: 'projekt-152-thumb' },
            { id: 'projekt-153', path: 'projekte/projekt-153/', thumbnailClass: 'projekt-153-thumb' },
            { id: 'projekt-154', path: 'projekte/projekt-154/', thumbnailClass: 'projekt-154-thumb' },
            { id: 'projekt-155', path: 'projekte/projekt-155/', thumbnailClass: 'projekt-155-thumb' },
            { id: 'projekt-156', path: 'projekte/projekt-156/', thumbnailClass: 'projekt-156-thumb' },
            { id: 'projekt-157', path: 'projekte/projekt-157/', thumbnailClass: 'projekt-157-thumb' },
            { id: 'projekt-158', path: 'projekte/projekt-158/', thumbnailClass: 'projekt-158-thumb' },
            { id: 'projekt-159', path: 'projekte/projekt-159/', thumbnailClass: 'projekt-159-thumb' },
            { id: 'projekt-160', path: 'projekte/projekt-160/', thumbnailClass: 'projekt-160-thumb' },
            { id: 'projekt-161', path: 'projekte/projekt-161/', thumbnailClass: 'projekt-161-thumb' },
            { id: 'projekt-162', path: 'projekte/projekt-162/', thumbnailClass: 'projekt-162-thumb' },
            { id: 'projekt-163', path: 'projekte/projekt-163/', thumbnailClass: 'projekt-163-thumb' },
            { id: 'projekt-164', path: 'projekte/projekt-164/', thumbnailClass: 'projekt-164-thumb' },
            { id: 'projekt-165', path: 'projekte/projekt-165/', thumbnailClass: 'projekt-165-thumb' },
            { id: 'projekt-166', path: 'projekte/projekt-166/', thumbnailClass: 'projekt-166-thumb' },
            { id: 'projekt-167', path: 'projekte/projekt-167/', thumbnailClass: 'projekt-167-thumb' },
            { id: 'projekt-168', path: 'projekte/projekt-168/', thumbnailClass: 'projekt-168-thumb' },
            { id: 'projekt-169', path: 'projekte/projekt-169/', thumbnailClass: 'projekt-169-thumb' },
            { id: 'projekt-170', path: 'projekte/projekt-170/', thumbnailClass: 'projekt-170-thumb' },
            { id: 'projekt-171', path: 'projekte/projekt-171/', thumbnailClass: 'projekt-171-thumb' },
            { id: 'projekt-172', path: 'projekte/projekt-172/', thumbnailClass: 'projekt-172-thumb' },
            { id: 'projekt-173', path: 'projekte/projekt-173/', thumbnailClass: 'projekt-173-thumb' },
            { id: 'projekt-174', path: 'projekte/projekt-174/', thumbnailClass: 'projekt-174-thumb' },
            { id: 'projekt-175', path: 'projekte/projekt-175/', thumbnailClass: 'projekt-175-thumb' },
            { id: 'projekt-176', path: 'projekte/projekt-176/', thumbnailClass: 'projekt-176-thumb' },
            { id: 'projekt-177', path: 'projekte/projekt-177/', thumbnailClass: 'projekt-177-thumb' },
            { id: 'projekt-178', path: 'projekte/projekt-178/', thumbnailClass: 'projekt-178-thumb' },
            { id: 'projekt-179', path: 'projekte/projekt-179/', thumbnailClass: 'projekt-179-thumb' },
            { id: 'projekt-180', path: 'projekte/projekt-180/', thumbnailClass: 'projekt-180-thumb' },
            { id: 'projekt-181', path: 'projekte/projekt-181/', thumbnailClass: 'projekt-181-thumb' },
            { id: 'projekt-182', path: 'projekte/projekt-182/', thumbnailClass: 'projekt-182-thumb' },
            { id: 'projekt-183', path: 'projekte/projekt-183/', thumbnailClass: 'projekt-183-thumb' },
            { id: 'projekt-184', path: 'projekte/projekt-184/', thumbnailClass: 'projekt-184-thumb' },
            { id: 'projekt-185', path: 'projekte/projekt-185/', thumbnailClass: 'projekt-185-thumb' },
            { id: 'projekt-186', path: 'projekte/projekt-186/', thumbnailClass: 'projekt-186-thumb' },
            { id: 'projekt-187', path: 'projekte/projekt-187/', thumbnailClass: 'projekt-187-thumb' },
            { id: 'projekt-188', path: 'projekte/projekt-188/', thumbnailClass: 'projekt-188-thumb' },
            { id: 'projekt-189', path: 'projekte/projekt-189/', thumbnailClass: 'projekt-189-thumb' },
            { id: 'projekt-190', path: 'projekte/projekt-190/', thumbnailClass: 'projekt-190-thumb' },
            { id: 'projekt-191', path: 'projekte/projekt-191/', thumbnailClass: 'projekt-191-thumb' },
            { id: 'projekt-192', path: 'projekte/projekt-192/', thumbnailClass: 'projekt-192-thumb' },
            { id: 'projekt-193', path: 'projekte/projekt-193/', thumbnailClass: 'projekt-193-thumb' },
            { id: 'projekt-194', path: 'projekte/projekt-194/', thumbnailClass: 'projekt-194-thumb' },
            { id: 'projekt-195', path: 'projekte/projekt-195/', thumbnailClass: 'projekt-195-thumb' },
            { id: 'projekt-196', path: 'projekte/projekt-196/', thumbnailClass: 'projekt-196-thumb' },
            { id: 'projekt-197', path: 'projekte/projekt-197/', thumbnailClass: 'projekt-197-thumb' },
            { id: 'projekt-198', path: 'projekte/projekt-198/', thumbnailClass: 'projekt-198-thumb' },
            { id: 'projekt-199', path: 'projekte/projekt-199/', thumbnailClass: 'projekt-199-thumb' },
            { id: 'projekt-200', path: 'projekte/projekt-200/', thumbnailClass: 'projekt-200-thumb' }*/
        ];
    }

    // Filtere nur existierende Projekte
    async filterExistingProjects() {
        const existingProjects = [];
        
        for (const project of this.projects) {
            try {
                const response = await fetch(project.path + 'index.html');
                if (response.ok) {
                    existingProjects.push(project);
                    console.log(`✅ Projekt gefunden: ${project.id}`);
                } else {
                    console.log(`⚠️ Projekt übersprungen: ${project.id} (Status: ${response.status})`);
                }
            } catch (error) {
                console.log(`⚠️ Projekt nicht erreichbar: ${project.id}`);
            }
        }
        
        console.log(`🚀 ${existingProjects.length} Projekte geladen:`, existingProjects.map(p => p.id));
        return existingProjects;
    }

    async loadProjectData(project) {
        try {
            const response = await fetch(project.path + 'index.html');
            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');

            // Titel extrahieren
            const titleElement = doc.querySelector('.project-hero-content h1');
            const title = titleElement ? titleElement.textContent.trim() : 'Projekt Titel';

            // Beschreibung extrahieren
            const leadElement = doc.querySelector('.project-lead');
            const description = leadElement ? leadElement.textContent.trim() : 'Projektbeschreibung';

            // Team-Informationen extrahieren
            const teamInfo = this.extractTeamInfo(doc);
            
            // Auszeichnungen extrahieren
            const awards = this.extractAwards(doc);

            // Projekt-Emoji aus dem HTML extrahieren
            const projectEmoji = this.extractProjectEmoji(doc);

            return {
                id: project.id,
                title,
                description,
                teamInfo,
                awards,
                emoji: projectEmoji,
                thumbnailClass: project.thumbnailClass,
                link: project.path
            };
        } catch (error) {
            console.error(`Fehler beim Laden von ${project.path}:`, error);
            return this.getFallbackData(project);
        }
    }

    extractTeamInfo(doc) {
        const teamSection = doc.querySelector('.team-info');
        if (!teamSection) return {};

        const teamInfo = {};
        
        // Schüler extrahieren
        const studentsElement = teamSection.querySelector('p strong');
        if (studentsElement && studentsElement.textContent.includes('Schüler:')) {
            const studentsText = studentsElement.parentElement.textContent;
            teamInfo.students = studentsText.replace('Schüler:', '').trim();
        }

        // Klassenstufen extrahieren
        const gradeElements = Array.from(teamSection.querySelectorAll('p'));
        for (let element of gradeElements) {
            if (element.textContent.includes('Klassenstufen:')) {
                teamInfo.grades = element.textContent.replace('Klassenstufen:', '').trim();
                break;
            }
        }

        // Fachbereich extrahieren
        for (let element of gradeElements) {
            if (element.textContent.includes('Fachbereich:')) {
                teamInfo.subject = element.textContent.replace('Fachbereich:', '').trim();
                break;
            }
        }

        return teamInfo;
    }

    extractAwards(doc) {
        const awardsSection = doc.querySelector('.awards-single');
        if (!awardsSection) return [];

        const awards = [];
        const awardItems = awardsSection.querySelectorAll('.award-item');
        
        awardItems.forEach(item => {
            const titleElement = item.querySelector('h3');
            const descElement = item.querySelector('p');
            
            if (titleElement && descElement) {
                awards.push({
                    title: titleElement.textContent.trim(),
                    description: descElement.textContent.trim()
                });
            }
        });

        return awards;
    }

    extractProjectEmoji(doc) {
        // Suche nach dem "Projektübersicht" h2 Element mit data-emoji Attribut
        const projectOverviewHeader = doc.querySelector('h2[data-emoji]');
        if (projectOverviewHeader) {
            const emoji = projectOverviewHeader.getAttribute('data-emoji');
            if (emoji) {
                console.log(`✅ Emoji für Projekt extrahiert: ${emoji}`);
                return emoji;
            }
        }

        // Fallback: Versuche auch andere h2 mit data-emoji zu finden
        const anyHeaderWithEmoji = doc.querySelector('h2[data-emoji]');
        if (anyHeaderWithEmoji) {
            const emoji = anyHeaderWithEmoji.getAttribute('data-emoji');
            console.log(`⚠️ Fallback Emoji verwendet: ${emoji}`);
            return emoji;
        }

        // Standard-Fallback
        console.log(`⚠️ Kein Emoji gefunden, verwende Standard 💡`);
        return '💡';
    }

    getFallbackData(project) {
        return {
            id: project.id,
            title: 'Projekt Titel',
            description: 'Projektbeschreibung wird geladen...',
            teamInfo: { students: 'Erfinder-Team', grades: 'Verschiedene Klassen' },
            awards: [],
            emoji: '💡', // Standard-Emoji als Fallback
            thumbnailClass: project.thumbnailClass,
            link: project.path
        };
    }

    async loadAllProjects() {
        // Filtere nur existierende Projekte
        const existingProjects = await this.filterExistingProjects();
        
        const projectPromises = existingProjects.map(project => this.loadProjectData(project));
        return await Promise.all(projectPromises);
    }

    generateProjectCard(projectData) {
        const hasAwards = projectData.awards && projectData.awards.length > 0;
        const awardInfo = hasAwards ? 
            `<div class="project-award">
                <span class="info-icon">🏆</span>
                <span>${projectData.awards[0].title} ${projectData.awards[0].description}</span>
            </div>` : '';

        // Verwende das aus dem HTML extrahierte Emoji
        const emoji = projectData.emoji || '💡';

        return `
            <article class="project-card" onclick="window.location.href='${projectData.link}'" style="cursor: pointer;">
                <div class="project-image">
                    <div class="project-thumbnail ${projectData.thumbnailClass}" aria-label="${projectData.title} Projekt"></div>
                </div>
                <div class="project-content">
                    <h2 data-emoji="${emoji}">${projectData.title}</h2>
                    <p class="project-excerpt">
                        ${projectData.description}
                    </p>
                    <div class="project-info">
                        <div class="project-team">
                            <span class="info-icon">👥</span>
                            <span>${projectData.teamInfo.students || 'Erfinder-Team'}</span>
                        </div>
                        <div class="project-grade">
                            <span class="info-icon">🎓</span>
                            <span>${projectData.teamInfo.grades || 'Verschiedene Klassen'}</span>
                        </div>
                        ${awardInfo}
                        ${projectData.teamInfo.subject ? `
                        <div class="project-tech">
                            <span class="info-icon">⚙️</span>
                            <span>${projectData.teamInfo.subject}</span>
                        </div>` : ''}
                    </div>
                    <a href="${projectData.link}" class="project-link" onclick="event.stopPropagation();">
                        <span>Projekt-Details</span>
                        <span class="link-arrow">→</span>
                    </a>
                </div>
            </article>
        `;
    }

    async renderProjects() {
        const projectsContainer = document.querySelector('.projects-grid');
        if (!projectsContainer) {
            console.error('Projects container nicht gefunden');
            return;
        }

        // Loading-Indikator anzeigen
        projectsContainer.innerHTML = '<div class="loading">Projekte werden geladen...</div>';

        try {
            const projectsData = await this.loadAllProjects();
            const projectsHTML = projectsData.map(project => this.generateProjectCard(project)).join('');
            projectsContainer.innerHTML = projectsHTML;
            
            // Nach dem Laden versuche hero-bild.png zu laden
            this.loadHeroImages();
        } catch (error) {
            console.error('Fehler beim Laden der Projekte:', error);
            projectsContainer.innerHTML = '<div class="error">Fehler beim Laden der Projekte</div>';
        }
    }

    async loadHeroImages() {
        const projectCards = document.querySelectorAll('.project-card');
        
        for (let i = 0; i < projectCards.length; i++) {
            const card = projectCards[i];
            const project = this.projects[i];
            const thumbnailDiv = card.querySelector('.project-thumbnail');
            
            if (thumbnailDiv && project) {
                const imagePath = `${project.path}images/hero-bild.png`;
                
                try {
                    const response = await fetch(imagePath);
                    if (response.ok) {
                        // Ersetze den Platzhalter mit dem echten Bild
                        thumbnailDiv.outerHTML = `<img src="${imagePath}" alt="${project.id} Hero-Bild" class="project-thumbnail-image">`;
                    }
                } catch (error) {
                    // Belasse den Platzhalter
                    console.log(`Hero-Bild für ${project.id} nicht gefunden, verwende Platzhalter`);
                }
            }
        }
    }
}

// Automatisches Laden beim Seitenstart
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.projects-grid')) {
        const loader = new ProjectsLoader();
        loader.renderProjects();
    }
});