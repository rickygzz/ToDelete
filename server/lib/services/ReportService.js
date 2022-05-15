const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ReportService
{
    static async getAllReports()
    {
        const allReports = await prisma.report.findMany({});

        return allReports;
    }

    static async getReportByID(id)
    {
        const theID = parseInt(id);

        const report = await prisma.report.findUnique({ where: { id: theID } });

        return report;
    }

    static async createReport(reportData)
    {
        // TODO Add ErrorHandling
        //      Check required fields in reportData

        await prisma.report.create({data: reportData});

        return { message: "OK" };
    }

    static async updateReport(id, reportData)
    {
        // TODO Add ErrorHandling
        const theID = parseInt(id);

        await prisma.report.update({
            where: { id: theID },
            data: reportData
        });

        return { message: "OK" };
    }

    static async deleteReport(id)
    {
        // TODO Add Error Handling
        const theID = parseInt(id);

        await prisma.report.delete({ where: { id: theID }});

        return { message: "OK" };
    }
}

module.exports = ReportService;